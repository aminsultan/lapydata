// var mongodb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;

var mongourl = 'mongodb://localhost:27017/';

MongoClient.connect(mongourl, function (err, db) {
    if (err) throw err;
    var dbo = db.db('studentdb');

    // dbo.collection('emp').findOne({}, function(err, result){
    //     if (err) throw err;
    //     console.log(result.fname);
    //     db.close();
    // });

    // dbo.collection('emp').find({}).toArray ((err, result) =>{
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // dbo.collection('emp').find({},{projection:{_id:0,fname:1}}).toArray ((err, result) =>{
    //     if (err) throw err;
    //    // console.log(result);
    //     //console.log(result[1].fname);
    //     for (let i=0; i<2; i++){
    //         console.log(result[i].fname);
    //     }
    //     db.close();
    // });

    // var myobj = {fname:"mohammad",lname:"amin",age:35};
    // dbo.collection('emp').insertOne(myobj,function(err,result){
    //     if (err) throw err;
    //     console.log('1 document inserted');
    //     db.close();
    // });

    // var myobj = [{fname:"mohammad",lname:"amin",age:35},
    //  {fname:"mohammad",lname:"shafique",age:34},
    //  {fname:"mohammad",lname:"shoeb",age:36},
    //  {fname:"mohammad",lname:"firoz",age:33},
    //  {fname:"arbaz",lname:"khan",age:35.5}];
   
    // dbo.collection('emp').insertMany(myobj,function(err,result){
    //     if (err) throw err;
    //     console.log('number of documents inserted: ' +result.insertedCount);
    //     db.close();
    // });

    // var myobj = [
    //     {_id :154, name:"Chocolate Heaven"},
    //     {_id: 155, name:"Chocolate jannat"},
    //     {_id: 156, name:"Chocolate bahisht"},
    // ];
    // dbo.collection('products').insertMany(myobj,function(err,result){
    //     if (err) throw err;
    //     console.log(result);
    //     db.close();
    // });

    // var myquery ={fname:'mohammad'};
    // var newvalues = {$set:{lname:'aadil',age:35.5}};
    // dbo.collection('emp').updateOne(myquery,newvalues,function(err,result){
    //     if(err) throw err;
    //     console.log('1 document updated');
    //     db.close();
    // });

    // var myquery = {age:35.5};
    // var newvalues = {$set:{age:36}};
    // dbo.collection('emp').updateMany(myquery,newvalues,function(err,res){
    //     if(err) throw err;
    //     // console.log(res.result.nModified + 'document(s) updated');
    //     console.log('document(s) updated');
    //     db.close();
    // });

    // var myquery = {lname:"aadil"};
    // dbo.collection("emp").deleteOne(myquery,function(err,result){
    //     if(err) throw err;
    //     console.log('1 document deleted');
    //     db.close();
    // });

    // var myquery = {age:'30'};
    // var newvalues = {$set:{age:32}};
    // dbo.collection('emp').updateOne(myquery,newvalues,function(err,result){
    //     if (err) throw err;
    //     console.log("1 record updated");
    //     db.close();
    // });

    // var myquery = {age:32};
    // dbo.collection('emp').deleteMany(myquery,function(err,result){
    //     if (err) throw err;
    //     console.log("some data deleted having age=32");
    //     db.close();
    // });

    // var myquery = {age:"32"};
    // var newvalues = {$set:{age:32}};
    // dbo.collection('emp').updateOne(myquery,newvalues,function(err,result){
    //     if (err) throw err;
    //     console.log('1 data updated');
    //     db.close();
    // });

    // var myquery = {age:32};
    // dbo.collection('emp').deleteOne(myquery,function(err,result){
    //     if(err) throw err;
    //     console.log("1 document deleted");
    //     db.close();
    // });

    dbo.collection('emp').find().limit(4).toArray(function(err,result){
        if(err) throw err;
        console.log(result);
        db.close();
    });

});