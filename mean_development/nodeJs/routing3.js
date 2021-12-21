var http = require('http');
var url = require('url');
function startServer(myroute){
    function myServer(req,res){
        let pname = url.parse(req.url,true).pathname;
        myroute(pname)
        res.writeHead(200,{"content-type":"text/html"});
        res.write("this one is owesome");
        res.end();
    }
    http.createServer(myServer).listen(8000);
}