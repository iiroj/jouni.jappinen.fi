#!/bin/sh

# Variables
BUILD_DIR="./public/"
S3_URL="s3://jouni.jappinen.fi"

# Deploy to S3
aws s3 sync $BUILD_DIR $S3_URL \
  --delete \
  --sse AES256