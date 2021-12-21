var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").findOne({"username":"aminashrafi"}, function(err, result) {
    if (err) throw err;
    console.log(result.firstname);
   // console.log(result.lastname);
    db.close();
  });
});