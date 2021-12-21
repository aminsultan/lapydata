var querystring= require('querystring');

function home(response){
    console.log("executing home handler");
    var htmlfile='<html'+ '<head>'+'<meta http-equivalent=--/>'+
    '</head>'+
    '<body>'+
    '<form action="/review" method="post">'+
    '<input type="text" name="firstname"  '+
     '<br>'+
     '<input type="text" name="lastname" '+
     '<br>'+
     '<br>'+
    '<input type="submit" value="submit"/>' +
    '</form>'+
    '</body>'+
    '</html>';
   
    response.writeHead(200,{"content-type":"text/html"});
    response.write(htmlfile);
    
     response.end();

}
function review(response, reviewdata){
    console.log("executing review handler " + querystring.parse(reviewdata).name);
    response.writeHead(200,{"content-type":"text/html"});
    response.write("your first name is "   + querystring.parse(reviewdata).firstname);
    response.write("<h2>your last name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).lastname + "</span><h2>");
    response.end();
}
exports.home=home;
exports.review=review;