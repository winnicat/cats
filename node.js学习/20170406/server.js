var http = require("http"),
    url = require("url");

function start(route, handle){
  function onRequest(request, response){
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");

    // response.writeHead(200, {'Content-Type': "text/plain"});
    // var cnt = route(handle, pathname);
    // response.write(cnt);
    // response.end();
    route(handle, pathname, response);
  }
  http.createServer(onRequest).listen(8080);
  console.log("Server has started.");
}

exports.start = start;