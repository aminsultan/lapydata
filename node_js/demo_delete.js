//To delete a record, or document as it is called in MongoDB, we use the deleteOne() method.
//The first parameter of the deleteOne() method is a query object defining which document to delete.
//If the query finds more than one document, only the first occurrence is deleted.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myquery = { address: 'Mountain 21' };
  //it will delete whole object related to this specific address
  dbo.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    db.close();
  });
});