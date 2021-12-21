var http = require("http");
var url = require("url");
function startserver(route,handle){
    function onrequest(req,res){
        var pathname = url.parse(req.url).pathname;
        console.log("request received for"+pathname);
        route(handle,pathname);
        res.writeHead(200, {"content-type":"text/html"});
        res.write("hello from server");
        res.end();
    }
    http.createServer(onrequest).listen(8080);
    console.log("server started");
}
exports.startserver= startserver;