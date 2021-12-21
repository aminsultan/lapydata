function SignUp(response) {
    console.log("this is a sign up function");
    let htmlfile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <style>
div{
    margin:70px 450px;
    padding:2px;
    border: 1px solid black;
    border-radius:10px;
    text-align: center;
    
}
    </style>
    </head>
    <body>
    <div>
    <h2 style="text-align: center;">Appzmine</h2>
    <h3 style="text-align: center;">Create your Appzmine Account.</h3><br>
        <form action="/about" method="post">
        Name:
        <input type="text" name="fname" value=" Enter your Name please" autofocus><br><br>
        Mail ID:
        <input type="email" name="mymail" placeholder="xyz@appzminetech.com"><br><br>
        Ph. Number:
        <input type="number" name="pnumber" placeholder="0987654321" ><br><br>
        Password:
        <input type="password" name="password" placeholder="number+aphabates+specialCharacters" ><br><br> 
        <input style="background-color:DodgerBlue; color:white;" type="submit"/>
        </form>
        </div>
        </body>
        </html>`;

    response.writeHead(200, { "content-type": "text/html" });
    response.write(htmlfile);
    response.end();

}
// ABOUT FUNCTION

var querystring = require("querystring");
function about(response, formdata) {
    let name = querystring.parse(formdata).fname;
    let Email = querystring.parse(formdata).mymail;
    let phone_number = querystring.parse(formdata).pnumber;
    let Password = querystring.parse(formdata).password;


    console.log("this is about function");
    response.writeHead(200, { "content-type": "text/html" });
    response.write("this is about your name =  " + name + "<br>");
    response.write("this is about your Email =  " + Email + "<br>");
    response.write("this is about your Phone Number =  " + phone_number + "<br>");
    response.write("this is about your Password =  " + Password + "<br>");
    response.write("")
    response.end();

    var MongoClient = require('mongodb').MongoClient;

    var mongourl = 'mongodb://localhost:27017/';

    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('studentdb');

        var myobj = { Name: name, EMAIL: Email, PHONE: phone_number, PASSWORD: Password };
        dbo.collection('NodeToMongoSignUp').insertOne(myobj, function (err, result) {
            if (err) throw err;
            console.log('1 document inserted');
            db.close();
        });
    });
}

// VIEWALL FUNCTION FOR COMPANY USE ONLY

function viewall(response) {
    let para = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <style>
    table, th, td {
        border: 1px solid black;
    }
    </style>
    </head>
    <body>
    <table > 
        <thead>            
            <th >fname</th>
            <th >emailid</th>
            <th >mobile_number</th> 
            <th >password</th>
            <th >edit</th>
            <th >delete</th>              
        </thead>`;

    var MongoClient = require('mongodb').MongoClient;
    var mongourl = "mongodb://localhost:27017/";
    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db("studentdb");
        dbo.collection("NodeToMongoSignUp").find({}).toArray(function (err, result) {
            if (err) throw err;
            for (i = 0; i < result.length; i++) {
                para += `<tr>
                <td >${result[i].Name}</td>
                <td>${result[i].EMAIL}</td>
                <td >${result[i].PHONE}</td>
                <td>${result[i].PASSWORD}</td>
                <td ><a href="/editdata?userid=${result[i]._id}">edit</a></td>
                <td ><a href="/deletedata?userid=${result[i]._id}">delete</a></td></tr>`;

            }
            para += `</table>
                </body>
                </html>`;
            db.close();
            response.write(para);
            response.end();
        });
    });
}

//login function

function login(response) {
console.log("this is a login function");
let htmlfile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <style>
div{
    margin:70px 450px;
    padding:2px;
    border: 1px solid black;
    border-radius:10px;
    text-align: center;
    
}

    </style>
    </head>
    <body>
    <div>
    <h2 style="text-align: center;">Appzmine</h2>
    <h3 style="text-align: center;">Login</h3><br>
        <form action="/logindata" method="post">
        
        Mail ID:
        <input type="email" name="mymail" ><br><br>
       
        Password:
        <input type="password" name="password" ><br><br> 
       <input style="background-color:DodgerBlue; color:white;" type="submit" value="login"/>
        </form>
        </div>
        </body>
        </html>`;
        response.writeHead(200, { "content-type": "text/html" });
        response.write(htmlfile);
        response.end();
}

function welcome(response, userid){
    // let url = require('url');
    // let data = url.parse(req.url, true).query;
    // let userid = data.userid;
    console.log(userid);
    let MongoClient = require('mongodb').MongoClient;
    let ObjectId = require("mongodb").ObjectId;
    let mongourl = "mongodb://localhost:27017/";

    MongoClient.connect(mongourl, (err, db) => {
        if (err) throw err;
        let dbo = db.db('studentdb');
        dbo.collection('NodeToMongoSignUp').find({ "_id": ObjectId(userid) }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            let htmlfile = `
                <html>
                    <head></head>
                    <body>
                        <form method="post" action="/logindata">
                            <lable>name:</lable>
                            <input name="fname" type="text" value="${result[0].Name}"><br>
                            <lable>Emailid:</lable>
                            <input name="mymail" type="text" value="${result[0].EMAIL}"><br>
                            <lable>Mobilenumber:</lable>
                            <input name="pnumber" type="text" value="${result[0].PHONE}"><br>
                            <lable>Password:</lable>
                            <input name="password" type="password" value="${result[0].PASSWORD}"><br>
                            
                            <input type="hidden" name="userid" value="${result[0]._id}"/>
                           
                        </form>
                    </body>
                </html>`;
            response.writeHead(200, { "content-type": "text/html" });
            response.write(htmlfile);
            response.end();
            db.close();
        });

    });
    
}

var querystring = require('querystring')
function logindata(response, formdata) {
    let Email = querystring.parse(formdata).mymail;
    let Password = querystring.parse(formdata).password;

    console.log("this is logindata function");
    // response.writeHead(200, { "content-type": "text/html" });
    // response.write("this is about your Email =  " + Email + "<br>");
    // response.write("this is about your Password =  " + Password + "<br>");
    // response.write("")
    // response.end();

    var MongoClient = require('mongodb').MongoClient;

    var mongourl = 'mongodb://localhost:27017/';

    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('studentdb');

        var myobj = { "EMAIL": Email, "PASSWORD": Password };
        dbo.collection('NodeToMongoSignUp').findOne(myobj, function (err, result) {
            if (err) throw err;
            if(result==null){
                response.write("Incorrect Login Details");
                response.end();
            }
            else{
                welcome(response, result._id);
            }
            console.log('1 document is found');
            db.close();
        });
    });
}


   

// EDIT FUNCTION

var url = require('url')
function editdata(response, formdata, request) {
    let data = url.parse(request.url, true).query;
    let edit_userid = data.userid;
    console.log(edit_userid);

    let MongoClient = require('mongodb').MongoClient;
    let ObjectId = require("mongodb").ObjectId;
    let mongourl = "mongodb://localhost:27017/";

    MongoClient.connect(mongourl, (err, db) => {
        if (err) throw err;
        let dbo = db.db('studentdb');
        dbo.collection('NodeToMongoSignUp').find({ "_id": ObjectId(edit_userid) }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            let htmlfile = `
            <html>
                <head></head>
                <body>
                    <form action="/updated_data" method="post">
                        <lable>Your Name :</lable>
                        <input name="fname" type="text" class="form-control" id="fname" value="${result[0].Name}">
                        <br>
                       <input name="mymail" type="hidden" value = "${result[0].EMAIL}"
                        <lable>Mobile Number:</lable>
                        <input name="mobilenumber" type="text" class="form-control" id="mobile" value="${result[0].PHONE}">
                        <br>
                        <lable>Password:</lable>
                        <input name="password" type="password" class="form-control" id="password" value="${result[0].PASSWORD}">
                        <br>
                        <input type="hidden" name="userid" value="${result[0]._id}"/>
                        <input type="submit" value="Update">
                    </form>
                </body>
            </html>`;
            response.writeHead(200, { "content-type": "text/html" });
            response.write(htmlfile);
            response.end();
            db.close();
        });

    });
}

// UPDATED FUNCTION

var querystring = require("querystring");
function updated_data(response, formdata) {
    let name = querystring.parse(formdata).fname;
    let Mail = querystring.parse(formdata).mymail;
    let phone_number = querystring.parse(formdata).mobilenumber;
    let Password = querystring.parse(formdata).password;
    let userid = querystring.parse(formdata).userid;

    console.log("this is update function");
    response.writeHead(200, { "content-type": "text/html" });
    response.write("this is your mail id = " + Mail + "<br>");
    response.write("this is about your name =  " + name + "<br>");

    response.write("this is about your Phone Number =  " + phone_number + "<br>");
    response.write("this is about your Password =  " + Password + "<br>");
    response.write("this is the user id = " + userid + "<br>")
    response.write("")
    response.end();

    var MongoClient = require('mongodb').MongoClient;
    let ObjectId = require("mongodb").ObjectId;
    var mongourl = 'mongodb://localhost:27017/';

    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('studentdb');
        // let ObjectId = require("mongodb").ObjectId;
        var myobj = { "_id": ObjectId(userid) };
        var newvalues = { $set: { Name: name, EMAIL: Mail, PHONE: phone_number, PASSWORD: Password } }
        dbo.collection('NodeToMongoSignUp').updateOne(myobj, newvalues, function (err, result) {
            if (err) throw err;
            console.log('1 document updated');
            db.close();
        });
    });
}

// DELETE FUNCTION

var url = require('url')
function deletedata(response, formdata, request) {
    let data = url.parse(request.url, true).query;
    let delete_userid = data.userid;
    console.log(delete_userid);

    let MongoClient = require('mongodb').MongoClient;
    let ObjectId = require("mongodb").ObjectId;
    let mongourl = "mongodb://localhost:27017/";

    MongoClient.connect(mongourl, (err, db) => {
        if (err) throw err;
        let dbo = db.db('studentdb');
        dbo.collection('NodeToMongoSignUp').find({ "_id": ObjectId(delete_userid) }).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            let htmlfile = `
            <html>
                <head></head>
                <body>
                    <form action="/delete1" method="post">
                        <lable>name:</lable>
                        <input name="fname" type="text" class="form-control" id="fname" value="${result[0].Name}">
                        <br>
                        <lable>Emailid:</lable>
                        <input name="emailid" type="text" class="form-control" id="email" value="${result[0].EMAIL}">
                        <br>
                        <lable>Mobilenumber:</lable>
                        <input name="mobilenumber" type="text" class="form-control" id="mobile" value="${result[0].PHONE}">
                        <br>
                        <lable>Password:</lable>
                        <input name="password" type="password" class="form-control" id="password" value="${result[0].PASSWORD}">
                        <br>
                        <input type="hidden" name="userid" value="${result[0]._id}"/>
                        <input type="submit" value = "Delete">
                    </form>
                </body>
            </html>`;
            response.writeHead(200, { "content-type": "text/html" });
            response.write(htmlfile);
            response.end();
            db.close();
        });

    });
}

// DELETEONE FUNCTION

var querystring = require("querystring");
function delete1(response, formdata) {

    let userid = querystring.parse(formdata).userid;

    console.log("this is delete function");
    response.writeHead(200, { "content-type": "text/html" });

    response.write("this is the user id whose data is deleted = " + userid + "<br>")
    response.write("")
    response.end();

    var MongoClient = require('mongodb').MongoClient;

    var mongourl = 'mongodb://localhost:27017/';
    var ObjectId = require("mongodb").ObjectId;

    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('studentdb');
        var myobj = { "_id": ObjectId(userid) };

        dbo.collection('NodeToMongoSignUp').deleteOne(myobj, function (err, result) {
            if (err) throw err;
            console.log('1 document deleted');
            db.close();
        });
    });

}
exports.SignUp = SignUp;
exports.about = about;
exports.viewall = viewall;
exports.editdata = editdata;
exports.updated_data = updated_data;
exports.deletedata = deletedata;
exports.delete1 = delete1;
exports.login = login;
exports.logindata = logindata;
exports.welcome = welcome;

