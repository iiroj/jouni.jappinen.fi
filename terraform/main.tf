provider "aws" {
  version = "~> 2.5"
  region  = "eu-north-1"
}

provider "aws" {
  alias   = "useast1"
  version = "~> 2.5"
  region  = "us-east-1"
}
