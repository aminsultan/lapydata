var http = require('http');
const { start } = require('repl');
var url = require('url');
function startserver(myroute){
    function myserver(req,res){
        let pname = url.parse(req.url,true).pathname;
        myroute(pname);
        res.writeHead(200,{"content-type":"text/html"});
        res.write("This is server");
        res.end();
    }
    http.createServer(myserver).listen(2000);
}
module.exports.startserver = startserver;