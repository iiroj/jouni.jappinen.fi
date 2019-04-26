resource "aws_s3_bucket" "main" {
  bucket = "${var.fqdn}"
  policy = "${data.aws_iam_policy_document.bucket_policy.json}"

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }
}

data "aws_iam_policy_document" "bucket_policy" {
  statement {
    sid       = "AllowCFOriginAccess"

    actions   = [
      "s3:GetObject",
    ]

    resources = [
      "arn:aws:s3:::${var.fqdn}/*",
    ]

    condition {
      test     = "StringEquals"
      variable = "aws:UserAgent"
      values   = ["${var.refer_secret}"]
    }

    principals {
      type        = "*"
      identifiers = ["*"]
    }
  }
}
