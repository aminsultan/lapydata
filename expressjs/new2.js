var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/studentdb');

var schema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var person = mongoose.model('person',schema);

app.set('view engine', 'pug');
app.set('views','../Pug-files');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
    res.render('file6');
 });

 app.post('/person', function(req, res){
    var personInfo = req.body; //Get the parsed information
    
    if(!personInfo.name || !personInfo.age || !personInfo.nationality){
       res.render('show_message', {
          message: "Sorry, you provided worng info", type: "error"});
    } else {
       var newPerson = new person({
          name: personInfo.name,
          age: personInfo.age,
          nationality: personInfo.nationality
       });
         
       newPerson.save(function(err, dt){
          if(err){
            res.render('show_message', {message: "Database error", type: "error"});}
          else{
             console.log("Recieved Details");
             console.log(req.body);
             res.render('show-message',{
                person:personInfo
             });
            }
       });
       
    }
 });

 app.get('/viewall',(req,res)=>{
   person.find({name:"Nabeel"},function(err,dt){
      console.log(dt);
   });
 });

  app.get('/update',(req,res)=>{
   //   person.updateOne({age:324},{name:"Aarish",nationality:"American"},function(err,data){
   //      if(err) throw err;
   //      console.log(data);
   //      res.send("UPDATED NAME = Aarish nationality: American");
   //  });
   person.findOneAndUpdate({name:"Aarish"},{age:25},function(err,data){
      if(err) throw err;
      console.log(data);
      res.send("Updated!")
   })
  });
  app.get('/delete',(req,res)=>{
   //   person.remove({age:24},function(err,data){
   //      if(err) throw err;
   //      console.log((data));
   //      res.send("Deleted!")
   //   });
   person.findOneAndRemove({name:"Aarish"},function(err,dt){
      if(err) throw err;
      console.log(dt);
      res.send("FIND AND DELETED!")
   });
  });

 app.listen(2000);