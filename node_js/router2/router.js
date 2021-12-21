function route(handle,pathname){
    if(pathname == "/favicon.ico"){

    }else{

    console.log("routinga request for"+pathname);
    if (typeof handle[pathname]==='function' ){
        handle[pathname]();
    }
    else{
        console.log("no handler for"+pathname);
    }
}
}
exports.route=route;