
var http=require('http');
var url= require('url');
function startserver(route,handle){
    function onrequest(req,res){
        var reviewdata="";
        var path=url.parse(req.url).pathname;
        console.log("request received for"+path);
        req.setEncoding('utf8');
        req.addListener("data",function(chunk){
            reviewdata += chunk;
        });
        req.addListener("end", function(){
            route(handle,path,res,reviewdata);
        });
    }
    http.createServer(onrequest).listen(8080);
    console.log("server started on localhost");
}
exports.startserver=startserver;