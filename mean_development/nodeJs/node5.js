var http = require('http');
var f1 = require("./node4");
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write(f1.myfun()+f1.myfun2());

    res.end(" Response ended");
}).listen(8080)