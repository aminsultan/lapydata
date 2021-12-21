var querystring= require('querystring');
var MongoClient= require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

function home(response){
    console.log("executing home handler");
    var htmlfile='<html'+ '<head>'+'<meta http-equivalent=--/>'+
    '</head>'+
    '<body>'+
    '<form action="/review" method="post">'+
    '<fieldset>'+
    '<legend><h2 style="color:blue;"> Personal Information:</h2></legend>'+
    '<input type="text" name="firstname" value="AMIN"> '+
     '<br>'+
     '<input type="text" name="lastname" value="SULTAN">'+
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
     '<input type="email" name="email" value="abc@xyz.com">'+
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
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var q= querystring.parse(reviewdata);
        dbo.collection("customers").insertOne(q, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
            db.close();
        });
      });
    response.writeHead(200,{"content-type":"text/html"});
    response.write("<h2>your first name is:<span style=color:blue;'> "   + querystring.parse(reviewdata).firstname + "</span></h2>");
    response.write("<h2>your last name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).lastname + "</span><h2>");
    response.write("<h4>your ADRESS is:<span style='color:blue;'> "   + querystring.parse(reviewdata).address + "</span></h4>");
    response.write("<h4>your STREAM is:<span style='color:blue;'> "   + querystring.parse(reviewdata).stream + "</span><h4>");
    response.write("<h4>your user name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).username + "</span></h4>");
    response.write("<h4>your password is:<span style='color:blue;'> "   + querystring.parse(reviewdata).password + "</span><h4>");
    response.write("<h4>your GENDER name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).gender + "</span></h4>");
    response.write("<h4>you know this/these languages :<span style='color:blue;'> "   + querystring.parse(reviewdata).languages_known + "</span><h4>");
    // response.write("<h4>your E-MAIL address is:<span style='color:blue;'> "   + querystring.parse(reviewdata).email + "</span></h4>");
    response.write("<h4>your UPLOADED RESUME is:<span style='color:blue;'> "   + querystring.parse(reviewdata).myFile + "</span><h4>");
    response.end();
}

function login(res) {
    var htmlfile='<html'+ '<head>'+'<meta http-equivalent=--/>'+
    '</head>'+
    '<body>'+
    '<form action="/validateuser" method="post">'+
    '<fieldset>'+
    '<legend><h2 style="color:blue;"> Login Form:</h2></legend>'+
    '<input type="email" name="email" value="abc@xyz.com">'+
     '<br>'+
    '<input type="password" name="password" value="" />'+
    '<br>'+
    '<input type="submit" value="LOGIN NOW" />'+
     '<br>'+
     '</html>';
     res.writeHead(200,{"content-type":"text/html"});
     res.write(htmlfile);
     res.end();
     
}
function validateuser(res, revidata) {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");
        var q = querystring.parse(revidata);
       
        var usremail, usrpass;
        usremail = q.email;
        usrpass = q.password;

        dbo.collection("customers").findOne({$and:[{"email":usremail},{"password":usrpass}]}, function(err, dt) {
          if (err) throw err;
          if(dt == null){
            res.writeHead(200,{"content-type":"text/html"});
            res.write("User Not Found");
            res.end();
          }
          else{
            res.writeHead(200,{"content-type":"text/html"});
            res.write('<html'+ '<head>'+'<meta http-equivalent=--/>'+'</head>'+'<body>'+
            '<form action="/update" method="post">'+
            '<fieldset>'+
            '<legend><h2 style="color:blue;"> Personal Information:</h2></legend>'+
            '<input type="text" name="firstname" value="'+dt.firstname+'">'+
             '<br>'+
             '<input type="text" name="lastname" value="'+dt.lastname+'">'+
             '<br>'+
             '<br>'+
             '<b style="color:blue;">ADDRESS:</b>'+
             '<br>'+
             
             '<textarea name="message" rows="10" cols="30">'+dt.message+'</textarea>'+
             '<br>'+
             '<br>'+
             '<b style="color:blue;">STREAM:</b>'+
             
             '<select name="'+dt.stream+'">'+
             
             '<option value="Electronics N Telecommunication">EXTC</option>'+
             
             '<option value="Mechanical">ME</option>'+
             '<option value="Computer Science">CSE</option>'+
             '<option value="Electrical">EXPO</option>'+
             '<option value="Civil">CIVIL</option>'+
             '</select>'+
             '<br>'+
             '<br>'+
             '<b style="color:blue;">USER NAME:</b>'+
             '<br>'+
             '<input type="email" name="email" value="'+dt.email+'">'+
             '<br>'+
             '<b style="color:blue;">PASSWORD:</b>'+
             '<br>'+
             '<input type="password" value="'+dt.password+'">'+
             '<br>'+
             '<b style="color:blue;">GENDER:</p>'+
             '<br>'+
             '<input type="radio" name="'+dt.gender+'" value="male" checked>MALE'+
             '<br>'+
             '<input type="radio" name="'+dt.gender+'" value="female" >FEMALE'+
             '<br>'+
             '<input type="radio" name="'+dt.gender+'" value="other" >OTHER'+
             '<br>'+
             '<b style="color:blue;">LANGUAGES KNOWN:</b>'+
             '<br>'+
             '<input type="checkbox" name="'+dt.languages_known+'" value="english" >ENGLISH'+
             '<br>'+
             '<input type="checkbox" name="'+dt.languages_known+'" value="hindi" >HINDI'+
             '<br>'+
             '<input type="checkbox" name="'+dt.languages_known+'" value="urdu" >URDU'+
             '<br>'+
             '<input type="checkbox" name="'+dt.languages_known+'" value="marathi" >MARATHI'+
             '<br>'+
             '<b style="color:blue;">UPLOAD RESUME:</b>'+
             '<br>'+
             '<input type="file" name="myFile" value="'+dt.myFile+'">'+
            '<input type="submit" value="Update" style="background-color:blue; color:white;">&nbsp;'+
            
            '</fieldset>'+
            '</form>'+
            '</body>'+
            '</html>' );
            res.end();
          }
      
          db.close();
        });
      });

}

function update(response, updatedata){
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = {"email": querystring.parse(updatedata).email};
  var newvalues = {$set:
    {"firstname": querystring.parse(updatedata).firstname,
    "lastname": querystring.parse(updatedata).lastname,
    "address": querystring.parse(updatedata).address,
    "stream": querystring.parse(updatedata).stream,
    "languages_known": querystring.parse(updatedata).languages_known,
    "myFile": querystring.parse(updatedata).myFile}};
  dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});
response.writeHead(200,{"content-type":"text/html"});
    response.write("<h2>your updated first name is:<span style=color:blue;'> "   + querystring.parse(updatedata).firstname + "</span></h2>");
    response.write("<h2>your updated last name is:<span style='color:blue;'> "   + querystring.parse(updatedata).lastname + "</span><h2>");
    response.write("<h4>your updated ADRESS is:<span style='color:blue;'> "   + querystring.parse(updatedata).address + "</span></h4>");
    response.write("<h4>your updated STREAM is:<span style='color:blue;'> "   + querystring.parse(updatedata).stream + "</span><h4>");
    // response.write("<h4>your user name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).username + "</span></h4>");
    // response.write("<h4>your password is:<span style='color:blue;'> "   + querystring.parse(reviewdata).password + "</span><h4>");
    // response.write("<h4>your updated GENDER name is:<span style='color:blue;'> "   + querystring.parse(reviewdata).gender + "</span></h4>");
    response.write("<h4>you know this/these languages :<span style='color:blue;'> "   + querystring.parse(updatedata).languages_known + "</span><h4>");
    // response.write("<h4>your updated E-MAIL address is:<span style='color:blue;'> "   + querystring.parse(updatedata).email + "</span></h4>");
    response.write("<h4>your updated RESUME is:<span style='color:blue;'> "   + querystring.parse(updatedata).myFile + "</span><h4>");
    response.end();
}
exports.home=home;
exports.review=review;
exports.login = login;
exports.validateuser = validateuser;
exports.update = update;
