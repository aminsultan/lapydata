function route(handle, pathname,response,reviewdata){
    console.log("routing a request for"+pathname);
    if(typeof handle[pathname]==="function")
    {
        handle[pathname](response,reviewdata);
    }
    else{
        console.log("no handler for"+pathname);
        response.writeHead(404,{"content-type":"text/html"});
        response.write("error 404 not found");
        response.end();
    }
}
exports.route=route;