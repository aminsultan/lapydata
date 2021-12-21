var http = require('http');
const { start } = require('repl');
var url = require('url');
function startserver(myroute, handle) {
    function myserver(req, res) {
        let pname = url.parse(req.url, true).pathname;
        console.log("Request received for"+ pname);
        let formdata ="";
        req.setEncoding("utf8");
        req.addListener("data",function(chunk){
            formdata +=chunk;
        });
        req.addListener("end",function(){
            if (pname == "/favicon.ico") { }
            else {
                myroute(pname, handle, res,formdata);
            }
        });

        
        // res.writeHead(200, { "content-type": "text/html" });
        // res.write("This is server");
        // res.end();
    }
    http.createServer(myserver).listen(2000);
}
module.exports.startserver = startserver;