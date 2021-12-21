var http=require('http');
// var mydt=require('./file_2');

// http.createServer(function(req,res)
// {
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write("the date and time is"+ mydt.myOwnModule());
//     res.end();

// })
// .listen(8080);

var dt=require('./myfirstmodule');

http.createServer(function(req,res){
    res.writeHead(200,{"content-type":"text/html"});
    res.write("todays date and time is"+ dt.myDateTime());
    res.end();

}).listen(8080);