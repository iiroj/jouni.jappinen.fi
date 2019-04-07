#!/usr/bin/env sh

ENV_SOURCE=".env"

if [ ! -f "$ENV_SOURCE" ]; then
  echo "Error: Environment Source does not exist"
  exit 1
else
  source $ENV_SOURCE
fi

DEPLOY_DIR="public"

if [ ! -d "$DEPLOY_DIR" ]; then
  echo "Error: Public Directory does not exist"
  exit 1
fi

if ${AWS_S3_BUCKET+false}; then
  echo "Error: \$AWS_S3_BUCKET is not defined"
  exit 1
fi

if ${AWS_CLOUDFRONT_ID+false}; then
  echo "Error: \$AWS_CLOUDFRONT_ID is not defined"
  exit 1
fi

# Upload immutable assets
npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --pattern '!(render-page).{js,js.map}'                  \
  --gzip                                                  \
  --cache 31536000                                        \
  --immutable

npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern 'static/**'                                   \
  --gzip                                                  \
  --cache 31536000                                        \
  --immutable

# Upload cacheable assets
npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern '*.{ico,jpg,pdf,png}'                         \
  --cache 630000

npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern '!(static)/**/*.{pdf,jpg,png}'                \
  --cache 630000

# Upload non-cached assets
npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern '!(static)/**/*.{html,json}'                  \
  --gzip

npx s3-redeploy --cwd $DEPLOY_DIR --bucket $AWS_S3_BUCKET \
  --no-rm                                                 \
  --pattern '*.{html,json}'                               \
  --gzip                                                  \
  --cf-dist-id $AWS_CLOUDFRONT_ID

# Tag new version
npx standard-version

# Push to git
git push --follow-tags origin master
