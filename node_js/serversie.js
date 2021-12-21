var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(200, {"content-type":"text/plain"});
    res.write("Hello node js o server");
    res.write("<h1>This is heading</h1>");
    res.end();
}).listen(8080);