#!/bin/bash

SHA=$(git rev-parse HEAD)

echo ℹ Current HEAD is at \""${SHA}"\"

TAGS=$(git describe --exact-match --tags --match "v*" "${SHA}" 2> /dev/null)

if [ -z "$TAGS" ]; then
    echo → Commit has no version tag, skipping deployment
    exit 0
fi

if [[ $TAGS =~ ^v([0-9]+)\.([0-9]+)\.([0-9]+) ]]; then
 VERSION="${BASH_REMATCH[0]}"
 echo ✓ Commit matches version "${VERSION}", creating new deployment
 exit 1
fi
