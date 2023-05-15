import { RemixServer } from "@remix-run/react";
import React from "react";
import { renderToReadableStream } from "react-dom/server";

const handleRequest = async (
  request,
  responseStatusCode,
  responseHeaders,
  remixContext
) => {
  responseHeaders.set("Content-Type", "text/html");

  const stream = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />
  );

  return new Response(stream, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
};

export default handleRequest;
