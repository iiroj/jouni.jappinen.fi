#!/bin/sh

# Variables
S3CMD_EXE=$(which s3cmd)
BUILD_DIR="./public/"
S3_URL="s3://jouni.jappinen.fi"

# Deploy to S3
$S3CMD_EXE sync $BUILD_DIR $S3_URL \
  --delete-removed         \
  --guess-mime-type        \
  --no-mime-magic          \
  --no-preserve            \
  --server-side-encryption \
  --cf-invalidate
