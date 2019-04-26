data "archive_file" "cloudfront_headers" {
    type        = "zip"
    source_dir  = "../lambda/cloudfront_headers"
    output_path = "../lambda/cloudfront_headers.zip"
}

resource "aws_lambda_function" "headers" {
  provider    = "aws.useast1"
  filename         = "../lambda/cloudfront_headers.zip"
  function_name    = "cloudfront_headers_jouni-jappinen-fi"
  role             = "${aws_iam_role.main.arn}"
  handler          = "index.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${data.archive_file.cloudfront_headers.output_base64sha256}"
  publish          = "true"
}

data "archive_file" "cloudfront_urls" {
    type        = "zip"
    source_dir  = "../lambda/cloudfront_urls"
    output_path = "../lambda/cloudfront_urls.zip"
}

resource "aws_lambda_function" "urls" {
  provider    = "aws.useast1"
  filename         = "../lambda/cloudfront_urls.zip"
  function_name    = "cloudfront_urls_jouni-jappinen-fi"
  role             = "${aws_iam_role.main.arn}"
  handler          = "index.handler"
  runtime          = "nodejs8.10"
  source_code_hash = "${data.archive_file.cloudfront_urls.output_base64sha256}"
  publish          = "true"
}

data "aws_iam_policy_document" "lambda-edge-role" {
  version = "2012-10-17"

  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = [ "lambda.amazonaws.com", "edgelambda.amazonaws.com" ]
    }
  }
}

resource "aws_iam_role" "main" {
  name = "lambda_iam_jouni-jappinen-fi"
  assume_role_policy = "${data.aws_iam_policy_document.lambda-edge-role.json}"
}
