function home(response) {
    console.log("this is a home function");
    let htmlfile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>
        <form action="/about" method="post">
        <input type="text" name="fname">
        <input type="submit"/>
        </form>
    </body>
    </html>`;

    response.writeHead(200, { "content-type": "text/html" });
    response.write(htmlfile);
    response.end();
}
function about(response) {
    console.log("this is about function");
    response.writeHead(200, { "content-type": "text/html" });
    response.write("this is about function");
    response.end();
}
exports.home = home;
exports.about = about;


