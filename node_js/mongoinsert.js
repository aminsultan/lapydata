var MongoClient = require('mongodb').MongoClient;
// mongodb is the library 
// mongoclient is the client who actually coomunicates 
//wth the mongodb database

var mongourl = "mongodb://localhost:27017/";
MongoClient.connect(mongourl, function(err, db) {
    // if call back function is second parameter then 
    //its first para. will be error object and 
    // second will be your data
  if (err) throw err;
    // if error is thrown then it will not go to the next 
    //line. The program will stop here
    // error can be if mongodb isnot installed, 
    //if port no is wrong, etc

  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };

  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
    // We are closing the connection with the datbase
  });
});