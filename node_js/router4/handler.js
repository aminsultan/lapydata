var querystring= require('querystring');

function home(response){
    console.log("executing home handler");
    var htmlfile='<html'+ '<head>'+'<meta http-equivalent=--/>'+
    '</head>'+
    '<body>'+
    '<form action="/review" method="post">'+
    '<textarea name="text" rows="20" '+
     'cols="60"></textarea>'+
    '<input type="submit" value="submit"/>' +
    '</form>'+
    '</body>'+
    '</html>';

    response.writeHead(200,{"content-type":"text/html"});
    response.write(htmlfile);
    // response.end();

}
function review(response, reviewdata){
    // console.log("executing review handler " + querystring.parse(reviewdata).text);
    response.writeHead(200,{"content-type":"text/html"});
    response.write("your review is " + querystring.parse(reviewdata).text);
    response.end();
}
exports.home=home;
exports.review=review;