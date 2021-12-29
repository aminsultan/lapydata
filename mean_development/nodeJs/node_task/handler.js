function home(response) {
    console.log("this is a home function");
    let htmlfile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    </head>
    <body>
        <form action="/about" method="post">
        Name:<br>
        <input type="text" name="fname"><br>
        Mail ID:<br>
        <input type="email" name="mymail"><br>
        Phone Number:<br>
        <input type="number" name="pnumber"><br>
        Password:<br>
        <input type="password" name="password"><br>
        Pin Code:<br>
        <input type="number" name="pincode"><br>
        <input type="submit"/>
        </form>
        </body>
        </html>`;



    response.writeHead(200, { "content-type": "text/html" });
    response.write(htmlfile);
    response.end();

}
var querystring = require("querystring");
function about(response, formdata) {
    let name = querystring.parse(formdata).fname;
    let Email = querystring.parse(formdata).mymail;
    let phone_number = querystring.parse(formdata).pnumber;
    let Password = querystring.parse(formdata).password;
    let Pincode = querystring.parse(formdata).pincode;

    console.log("this is about function");
    response.writeHead(200, { "content-type": "text/html" });
    response.write("this is about your name =  " + name + "<br>");
    response.write("this is about your Email =  " + Email + "<br>");
    response.write("this is about your Phone Number =  " + phone_number + "<br>");
    response.write("this is about your Password =  " + Password + "<br>");
    response.write("this is about your Pincode =  " + Pincode + "<br>");
    response.write("")
    response.end();

    var MongoClient = require('mongodb').MongoClient;

    var mongourl = 'mongodb://localhost:27017/';

    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('studentdb');

        var myobj = { Name: name, EMAIL: Email, PHONE: phone_number, PASSWORD: Password, PINCODE: Pincode };
        dbo.collection('NodeToMongo').insertOne(myobj, function (err, result) {
            if (err) throw err;
            console.log('1 document inserted');
            db.close();
        });
    });
}

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
            <th >pincode</th> 
            <th >edit</th>
            <th >delete</th>              
        </thead>`;

    var MongoClient = require('mongodb').MongoClient;
    var mongourl = "mongodb://localhost:27017/";
    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db("studentdb");
        dbo.collection("NodeToMongo").find({}).toArray(function (err, result) {
            if (err) throw err;
            for (i = 0; i < result.length; i++) {
                para += `<tr>
                <td >${result[i].Name}</td>
                <td>${result[i].EMAIL}</td>
                <td >${result[i].PHONE}</td>
                <td>${result[i].PASSWORD}</td>
                <td >${result[i].PINCODE}</td>
                <td ><a href="/editdata?userid=${result[i]._id}">edit</a></td>
                <td ><a href="/deletedata?userid=${result[i]._id}">delet</a></td></tr>`;
                // console.log(result[i].fname+result[i].emailid+result[i].mobile_number+result[i].password+result[i].pincode);
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
        dbo.collection('NodeToMongo').find({ "_id": ObjectId(edit_userid)}).toArray((err, result) => {
            if (err) throw err;
            console.log(result);
            let htmlfile = `
            <html>
                <head></head>
                <body>
                    <form action="/updatedata" method="post">
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
                        <lable>Pincode:</lable>
                        <input name="pincode" type="text" class="form-control" id="pincode" value="${result[0].PINCODE}">
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

var querystring = require("querystring");

function updatedata(response, formdata) {
    let name = querystring.parse(formdata).fname;
    let Email = querystring.parse(formdata).emailid;
    let phone_number = querystring.parse(formdata).mobilenumber;
    let Password = querystring.parse(formdata).password;
    let Pincode = querystring.parse(formdata).pincode;
    let userid = querystring.parse(formdata).userid;

    console.log("this is update function");
    response.writeHead(200, { "content-type": "text/html" });
    response.write("this is about your name =  " + name + "<br>");
    response.write("this is about your Email =  " + Email + "<br>");
    response.write("this is about your Phone Number =  " + phone_number + "<br>");
    response.write("this is about your Password =  " + Password + "<br>");
    response.write("this is about your Pincode =  " + Pincode + "<br>");
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
        var newvalues = {$set:{Name: name, EMAIL: Email, PHONE: phone_number, PASSWORD: Password, PINCODE: Pincode }}
        dbo.collection('NodeToMongo').updateOne(myobj,newvalues, function (err, result) {
            if (err) throw err;
            console.log('1 document updated');
            db.close();
        });
    });
}

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
        dbo.collection('NodeToMongo').find({ "_id": ObjectId(delete_userid)}).toArray((err, result) => {
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
                        <lable>Pincode:</lable>
                        <input name="pincode" type="text" class="form-control" id="pincode" value="${result[0].PINCODE}">
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

var querystring = require("querystring");
function delete1(response, formdata) {

    let userid = querystring.parse(formdata).userid;
    
    console.log("this is delete function");
    response.writeHead(200, { "content-type": "text/html" });
    
    response.write("this is the user id whose data you wanted to delete = " + userid + "<br>") 
    response.write("")
    response.end();

    var MongoClient = require('mongodb').MongoClient;
    var mongourl = 'mongodb://localhost:27017/';
    var ObjectId = require("mongodb").ObjectId;
    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db('studentdb');
        var myobj = { "_id": ObjectId(userid) };
        dbo.collection('NodeToMongo').deleteOne(myobj, function (err, result) {
            if (err) throw err;
            console.log('1 document deleted');
            db.close();
        });
    });

}
exports.home = home;
exports.about = about;
exports.viewall = viewall;
exports.editdata = editdata;
exports.updatedata = updatedata;
exports.deletedata = deletedata;
exports.delete1 = delete1;

