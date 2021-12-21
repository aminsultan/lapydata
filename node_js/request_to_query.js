var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'content-type':'text/html'});
    response.write(request.url);
    response.end();
}).listen(8888);
