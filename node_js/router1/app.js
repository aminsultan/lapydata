var server = require ('./server');
var routes = require ('./router');
server.startserver(routes.route);