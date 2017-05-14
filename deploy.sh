#!/bin/sh

command -v s3cmd >/dev/null 2>&1 || { echo "s3cmd not found. Aborting." >&2; exit 1; }

SOURCE=./public
TARGET=s3://jouni.jappinen.fi

s3cmd sync $SOURCE $TARGET  \
  --delete-removed          \
  --guess-mime-type         \
  --no-mime-magic           \
  --no-preserve             \
  --server-side-encryption  \
  --cf-invalidate           \
