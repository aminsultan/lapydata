//When using the $set operator, only the specified fields are updated:
//Update the lname from "sultan" to "SULTAN":
// changes will be take place only at one location.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { lname: "sultan" };
  var newvalues = {$set: {lname: "SULTAN"} };
  dbo.collection("employee").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});
