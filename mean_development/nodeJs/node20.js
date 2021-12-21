var http = require('http');
function myServer(req, res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("this is the server");
    res.end();
}
http.createServer(myServer).listen(8000);