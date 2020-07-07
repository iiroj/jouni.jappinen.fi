"use strict";

const STATIC_HEADERS = {
  "content-security-policy": [
    {
      key: "Content-Security-Policy",
      value:
        "default-src 'none'; connect-src 'self' https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://*.cloudfront.net; object-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
    },
  ],
  link: [
    {
      key: "Link",
      value:
        "<https://fonts.googleapis.com/css?family=Spectral:400,600>;crossorigin=anonymous;rel=preload;as=style;",
    },
  ],
  "referrer-policy": [
    {
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    },
  ],
  "strict-transport-security": [
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubdomains; preload",
    },
  ],
  "x-content-type-options": [
    { key: "X-Content-Type-Options", value: "nosniff" },
  ],
  "x-frame-options": [{ key: "X-Frame-Options", value: "DENY" }],
  "x-xss-protection": [{ key: "X-XSS-Protection", value: "1; mode=block" }],
};

const HTML_CONTENT_TYPE = /^text\/html$/;
const HTML = /\.html$/;
const NEXT_STATIC = /^\/_next\/static\//;
const STATIC_FILE = /\.(?:jpg|pdf|png|svg|webmanifest)$/;

exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;

  if (response.status !== "200") {
    return callback(null, response);
  }

  Object.assign(response.headers, STATIC_HEADERS);

  const { uri } = event.Records[0].cf.request;

  const addCacheControl = (value) =>
    void (response.headers["cache-control"] = [
      { key: "Cache-Control", value },
    ]);

  if (NEXT_STATIC.test(uri)) {
    addCacheControl("public,immutable,max-age=31536000,stale-while-revalidate");
  }

  const contentType =
    response.headers["content-type"] &&
    response.headers["content-type"][0] &&
    response.headers["content-type"][0].value;

  if (HTML_CONTENT_TYPE.test(contentType) || HTML.test(uri)) {
    addCacheControl(
      "public,max-age=0,must-revalidate,s-maxage=2592000,stale-while-revalidate"
    );
  }

  if (STATIC_FILE.test(uri)) {
    addCacheControl("public,max-age=2592000,stale-while-revalidate");
  }

  callback(null, response);
};
