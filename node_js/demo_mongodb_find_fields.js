var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.collection("customers").find({}, { projection: 
    { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
        //where 0 means donot show the object and 1 means show the object and 0 will for _id only
    if (err) throw err;
    console.log(result);
    db.close();
  });
});