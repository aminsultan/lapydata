var http = require('http'); // http is the inbuilt module

//create http server

http.createServer(function (request, response){ // we have to use callback function for request and response
    response.writeHead( 200, {"content-type": "text/html"});//to say that every thing is ok we write 200, this is called as header declaration.
    response.write("<h2>hello from HTTP server</h2> ");
    response.write("<p>we are learning response function in node js</p>");
    response.write("URL:" + request.url); // to see the url, without base address
    response.end();// to end the http server we need to write end function always

    
}).listen(3600); // to see the output at port no.3600