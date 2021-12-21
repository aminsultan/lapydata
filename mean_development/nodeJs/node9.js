var http = require('http');
var url = require('url');
http.createServer(function(req,res){
res.writeHead(200,{"content-type":"text/html"});


// res.write(req.url);
console.log(req.url);

let data = url.parse(req.url,true).query; // it will convert the code into object
let fname = data.fname;
let lname = data.lname;
res.write("first name =" + fname + "last name = " + lname);
res.end();


}).listen(8080);