var http = require('http');
var url = require("url");
// const { runInContext } = require('vm');
function startServer(){
    function myServer(req,res){
        let pname = url.parse(req.url,true).pathname;
        // 
        route(pname);
        res.writeHead(200,{'content-type':'text/html'});
        res.write('this is another server');
        res.end()
    }
    http.createServer(myServer).listen(8080);
}
function route(path){
    console.log("Routing on path = " + path);
}
startServer();