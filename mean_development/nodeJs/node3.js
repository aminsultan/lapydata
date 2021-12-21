var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
let htmlfile=`<html>
<head> <title>hello world</title></head>
<body>
<h1>this is another example of node js</h1>
<h2>we are using html code inside it</h2>
<p>in which this is the paragraph</p>
</body>
</html>`;

    res.write(htmlfile);
    res.end(" Response ended");

}).listen(8080);