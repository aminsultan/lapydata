//You can also use the dropCollection() method to delete a table (collection).
//The dropCollection() method takes two parameters: 
//the name of the collection and a callback function.
//Delete the "customers" collection, using dropCollection():
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.dropCollection("customers", function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});