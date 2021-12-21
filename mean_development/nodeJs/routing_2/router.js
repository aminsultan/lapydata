function route(path,handle){
    console.log("Routing on path = "+path);
    if (typeof handle[path]=== "function"){
        handle[path]();
    }
    else{
        console.log("no handler for " +path);
    }
}
module.exports.route = route;

