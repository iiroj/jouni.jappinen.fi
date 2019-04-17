provider "aws" {
  version = "~> 2.5"
  region  = "eu-north-1"
}

provider "aws" {
  alias   = "useast1"
  version = "~> 2.5"
  region  = "us-east-1"
}

locals {
  domain = "jouni.jappinen.fi"
  s3_origin_id = "S3Origin-${local.domain}"
}

resource "aws_cloudfront_origin_access_identity" "origin_access_identity" {
  comment = "Origin Access Identity for ${local.domain}"
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.site.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = ["${aws_cloudfront_origin_access_identity.origin_access_identity.iam_arn}"]
    }
  }
}

resource "aws_s3_bucket" "site" {
  bucket = "${local.domain}"

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

resource "aws_s3_bucket_policy" "site" {
  bucket = "${aws_s3_bucket.site.id}"
  policy = "${data.aws_iam_policy_document.s3_policy.json}"
}

data "aws_acm_certificate" "certificate" {
  provider    = "aws.useast1"
  domain      = "${local.domain}"
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}


resource "aws_iam_role" "lambda_iam" {
  name = "lambda_iam_jouni-jappinen-fi"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": [
          "lambda.amazonaws.com",
          "edgelambda.amazonaws.com"
        ]
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

data "archive_file" "cloudfront_headers" {
    type        = "zip"
    source_dir  = "lambda/cloudfront_headers"
    output_path = "lambda/cloudfront_headers.zip"
}

resource "aws_lambda_function" "lambda_cloudfront_headers" {
  provider    = "aws.useast1"
  filename         = "lambda/cloudfront_headers.zip"
  function_name    = "cloudfront_headers_jouni-jappinen-fi"
  role             = "${aws_iam_role.lambda_iam.arn}"
  handler          = "index.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${data.archive_file.cloudfront_headers.output_base64sha256}"
  publish          = "true"
}

data "archive_file" "cloudfront_urls" {
    type        = "zip"
    source_dir  = "lambda/cloudfront_urls"
    output_path = "lambda/cloudfront_urls.zip"
}

resource "aws_lambda_function" "lambda_cloudfront_urls" {
  provider    = "aws.useast1"
  filename         = "lambda/cloudfront_urls.zip"
  function_name    = "cloudfront_urls_jouni-jappinen-fi"
  role             = "${aws_iam_role.lambda_iam.arn}"
  handler          = "index.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${data.archive_file.cloudfront_urls.output_base64sha256}"
  publish          = "true"
}

resource "aws_cloudfront_distribution" "cdn" {
  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"
  aliases             = ["${local.domain}"]
  price_class         = "PriceClass_200"
  wait_for_deployment = false

  origin {
    domain_name = "${aws_s3_bucket.site.bucket_domain_name}"
    origin_id   = "${local.s3_origin_id}"

    s3_origin_config {
      origin_access_identity = "${aws_cloudfront_origin_access_identity.origin_access_identity.cloudfront_access_identity_path}"
    }
  }

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "${local.s3_origin_id}"
    compress         = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 31536000
    default_ttl            = 31536000
    max_ttl                = 31536000

    lambda_function_association {
      event_type = "origin-request"
      lambda_arn = "${aws_lambda_function.lambda_cloudfront_urls.arn}:${aws_lambda_function.lambda_cloudfront_urls.version}"
    }

    lambda_function_association {
      event_type = "viewer-response"
      lambda_arn = "${aws_lambda_function.lambda_cloudfront_headers.arn}:${aws_lambda_function.lambda_cloudfront_headers.version}"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "${data.aws_acm_certificate.certificate.arn}"
    minimum_protocol_version = "TLSv1.2_2018"
    ssl_support_method       = "sni-only"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}
