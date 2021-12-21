var querystring= require('querystring');

function home(response){
    console.log("executing home handler");
    var htmlfile='<html'+ '<head>'+'<meta http-equivalent=--/>'+
    '</head>'+
    '<body>'+
    '<form action="/review" method="post">'+
    '<fieldset>'+
    '<legend><h2 style="color:blue;"> Personal Information:</h2></legend>'+
    '<input type="text" name="firstname" value="AMIN" '+
     '<br>'+
     '<input type="text" name="lastname" value="SULTAN"'+
     '<br>'+
     '<br>'+
     '<b style="color:blue;">ADDRESS:</b>'+
     '<br>'+
     
     '<textarea name="message" rows="10" cols="30" value="My Address"></textarea>'+
     '<br>'+
     '<br>'+
     '<b style="color:blue;">STREAM:</b>'+
     
     '<select name="stream">'+
     '<option value="Electronics & Telecommunication">EXTC</option>'+
     '<option value="Mechanical">ME</option>'+
     '<option value="Computer Science">CSE</option>'+
     '<option value="Electrical">EXPO</option>'+
     '<option value="Civil">CIVIL</option>'+
     '</select>'+
     '<br>'+
     '<br>'+
     '<b style="color:blue;">USER NAME:</b>'+
     '<br>'+
     '<input type="text" name="username">'+
     '<br>'+
     '<b style="color:blue;">PASSWORD:</b>'+
     '<br>'+
     '<input type="password" name="password">'+
     '<br>'+
     '<b style="color:blue;">GENDER:</p>'+
     '<br>'+
     '<input type="radio" name="gender" value="male" checked>MALE'+
     '<br>'+
     '<input type="radio" name="gender" value="female" >FEMALE'+
     '<br>'+
     '<input type="radio" name="gender" value="other" >OTHER'+
     '<br>'+
     '<b style="color:blue;">LANGUAGES KNOWN:</b>'+
     '<br>'+
     '<input type="checkbox" name="languages_known" value="english" >ENGLISH'+
     '<br>'+
     '<input type="checkbox" name="languages_known" value="hindi" >HINDI'+
     '<br>'+
     '<input type="checkbox" name="languages_known" value="urdu" >URDU'+
     '<br>'+
     '<input type="checkbox" name="languages_known" value="marathi" >MARATHI'+
     '<br>'+
     '<b style="color:blue;">EMAIL:</b>'+
     '<br>'+
     '<input type="email" name="email" value="abc@xyz.com">'+
     '<br>'+
     '<b style="color:blue;">UPLOAD RESUME:</b>'+
     '<br>'+
     '<b>Select a file:</b>'+
     '<input type="file" name="myFile">'+
    '<input type="submit" value="Submit" style="background-color:blue; color:white;">&nbsp;'+
    '<input type="reset" value="Reset"  style="background-color:blue; color:white;">'+
    '</fieldset>'+
    '</form>'+
    '</body>'+
    '</html>';
   
    response.writeHead(200,{"content-type":"text/html"});
    response.write(htmlfile);
    
     response.end();

}
function review(response, reviewdata){
    console.log("executing review handler " + querystring.parse(reviewdata).firstname);
    response.writeHead(200,{"content-type":"text/html"});
    response.write("<h2>your first name is:<span style=color:blue;'> "   + querystring.parse(reviewdata).firstname + "</span></h2>");
    response.write("<h2>your last name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).lastname + "</span><h2>");
    response.write("<h4>your ADRESS is:<span style='color:blue;'> "   + querystring.parse(reviewdata).message + "</span></h4>");
    response.write("<h4>your STREAM is:<span style='color:blue;'> "   + querystring.parse(reviewdata).stream + "</span><h4>");
    response.write("<h4>your user name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).username + "</span></h4>");
    response.write("<h4>your password is:<span style='color:blue;'> "   + querystring.parse(reviewdata).password + "</span><h4>");
    response.write("<h4>your GENDER name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).gender + "</span></h4>");
    response.write("<h4>you know this/these languages :<span style='color:blue;'> "   + querystring.parse(reviewdata).languages_known + "</span><h4>");
    response.write("<h4>your E-MAIL address is:<span style='color:blue;'> "   + querystring.parse(reviewdata).email + "</span></h4>");
    response.write("<h4>your UPLOADED RESUME is:<span style='color:blue;'> "   + querystring.parse(reviewdata).myFile + "</span><h4>");

    response.end();
}
exports.home=home;
exports.review=review;
