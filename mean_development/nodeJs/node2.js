var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("Hello Node Js");
    res.end("Response ended");

}).listen(8080);