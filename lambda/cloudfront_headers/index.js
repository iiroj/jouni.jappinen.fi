exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;
  const headers = response.headers;

  headers["strict-transport-security"] = [
    {
      key: "Strict-Transport-Security",
      value: "max-age=63072000; includeSubdomains; preload"
    }
  ];
  headers["content-security-policy"] = [
    {
      key: "Content-Security-Policy",
      value:
        "default-src 'none'; connect-src 'self' https://fonts.gstatic.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://ping.iiro.fi; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://ping.iiro.fi; style-src 'self' 'unsafe-inline'"
    }
  ];
  headers["x-content-type-options"] = [
    { key: "X-Content-Type-Options", value: "nosniff" }
  ];
  headers["x-frame-options"] = [{ key: "X-Frame-Options", value: "DENY" }];
  headers["x-xss-protection"] = [
    { key: "X-XSS-Protection", value: "1; mode=block" }
  ];
  headers["referrer-policy"] = [
    { key: "Referrer-Policy", value: "same-origin" }
  ];
  headers["feature-policy"] = [
    { key: "Feature-Policy", value: "default 'none'" }
  ];

  callback(null, response);
};
