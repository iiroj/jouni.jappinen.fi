const regexSuffixless = /\/[^/.]+$/;
const regexTrailingSlash = /.+\/$/;

exports.handler = (event, context, callback) => {
  const { request } = event.Records[0].cf;
  const { uri } = request;

  // Redirect suffixless uris
  if (uri.match(regexSuffixless)) {
    const response = {
      headers: { location: [{ key: "Location", value: uri + "/" }] },
      status: "301",
      statusDescription: "Moved Permanently"
    };
    return callback(null, response);
  }

  // Default to index.html
  if (uri.match(regexTrailingSlash)) {
    request.uri = uri + "index.html";
  }

  callback(null, request);
};
