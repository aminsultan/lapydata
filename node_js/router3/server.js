var http= require('http');
var url= require('url');
function startserver(route, handle){
    function onRequest(req,res){
        var pathname=url.parse(req.url).pathname;
        console.log("Request received for"+pathname);
        route(handle,pathname,res);
    }
    http.createServer(onRequest).listen(8080);
    console.log("server started");
}
exports.startserver=startserver;