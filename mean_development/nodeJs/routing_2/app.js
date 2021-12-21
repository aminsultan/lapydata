let server  =require('./server');
var handler = require("./handler.js");
let router = require('./router');

let handle = {"/home":handler.home , "/about": handler.about};

server.startserver(router.route, handle);