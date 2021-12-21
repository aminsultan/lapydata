function route(path,handle,resp){
    console.log("Routing on path = "+path);
    if (typeof handle[path]=== "function"){
        handle[path](resp);
    }
    else{
        resp.writeHead(404,{"content-type":"text/html"});
        resp.write("<h1>Sorry! the page you requested is not found</h1>");
        resp.end();
        console.log("no handler for " +path);
    }
}
module.exports.route = route;

