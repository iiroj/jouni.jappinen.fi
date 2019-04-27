resource "aws_cloudfront_distribution" "main" {
  provider    = "aws.useast1"
  http_version = "http2"

  origin {
    domain_name = "${aws_s3_bucket.main.website_endpoint}"
    origin_id   = "origin-${var.fqdn}"

    custom_origin_config {
      http_port              = "80"
      https_port             = "443"
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1", "TLSv1.1", "TLSv1.2"]
    }

     custom_header {
      name  = "User-Agent"
      value = "${var.refer_secret}"
    }
  }

  enabled             = true
  is_ipv6_enabled     = true
  default_root_object = "index.html"

  custom_error_response {
    error_caching_min_ttl = 300
    error_code            = 403
    response_code         = 404
    response_page_path    = "/404.html"
  }

  aliases             = ["${var.fqdn}"]

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "origin-${var.fqdn}"
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
      event_type = "viewer-response"
      lambda_arn = "${aws_lambda_function.headers.arn}:${aws_lambda_function.headers.version}"
    }
  }

  price_class         = "PriceClass_100"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = "${data.aws_acm_certificate.main.arn}"
    minimum_protocol_version = "TLSv1.2_2018"
    ssl_support_method       = "sni-only"
  }

  wait_for_deployment = false
}

data "aws_acm_certificate" "main" {
  provider    = "aws.useast1"
  domain      = "${var.fqdn}"
  types       = ["AMAZON_ISSUED"]
  most_recent = true
}
