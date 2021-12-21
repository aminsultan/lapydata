//You can update a record, 
//or document as it is called in MongoDB, by using the updateOne() method.
//The first parameter of the updateOne() 
//method is a query object defining which document to update.
//If the query finds more than one record, only the first occurrence is updated.
//The second parameter is an object defining the new values of the document.
//Update the document with the address "Valley 345" to name="Mickey" and address="Canyon 123":
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { age: "30" };
  var newvalues = { $set: {fname: "mohammad amin", age: "40" } };
  dbo.collection("employee").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});