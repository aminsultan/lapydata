let server  =require('./server');
var handler = require("./handler.js");
let router = require('./router');

let handle = {"/SignUp":handler.SignUp , "/about": handler.about,"/viewall":handler.viewall, "/welcome":handler.welcome,
"/editdata":handler.editdata, "/updated_data":handler.updated_data, "/deletedata":handler.deletedata, "/delete1":handler.delete1,"/login":handler.login,"/logindata":handler.logindata};

server.startserver(router.route, handle);