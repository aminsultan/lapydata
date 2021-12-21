let server  =require('./server');
var handler = require("./handler.js");
let router = require('./router');

let handle = {"/home":handler.home , "/about": handler.about,"/viewall":handler.viewall,
"/editdata":handler.editdata, "/updatedata":handler.updatedata, "/deletedata":handler.deletedata, "/delete1":handler.delete1};

server.startserver(router.route, handle);