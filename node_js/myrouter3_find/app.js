var server = require ("./server");
var router = require ("./router");
var handler = require("./handler");
var handle = {};
handle ["/home"]= handler.home;
handle ["/review"]= handler.review;
handle["/login"] = handler.login;
handle["/validateuser"]=handler.validateuser;
handle["/update"]=handler.update;

server.startserver(router.route, handle);