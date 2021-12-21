var http = require("http");
var url = require("url");

function startserver(abc){
    // route function of router fie is renamed as abc in our server.js file
    // This is type of callback or anonymous function
    
    function onrequest(req,res){
        var patname = url.parse(req.url).pathname;
        abc(patname);
        console.log("request received for "+patname);
        res.writeHead(200,{"content-type":"text/html"});
        res.write("hello from our server modulo");
        res.end();
    }
    http.createServer(onrequest).listen(8080);

}
exports.startserver = startserver;