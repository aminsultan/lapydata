var http = require('http');

function startServer(){
    function myServer(req,res){
        res.writeHead(200,{"content-type":"text/html"});
        res.write("this is the new server ");
        res.end();
    }
    http.createServer(myServer).listen(8000);
}
module.exports.startServer = startServer;