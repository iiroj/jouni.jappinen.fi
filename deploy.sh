#!/bin/sh

SOURCE=./public/
TARGET=s3://jouni.jappinen.fi

aws s3 sync $SOURCE $TARGET --delete --sse
