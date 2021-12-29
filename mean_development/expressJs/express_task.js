var mongoose = require("mongoose");
var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', "./pugfiles");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/my_db');


var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});

var PersonModal = mongoose.model("PersonModal", personSchema);



app.get('/register', function (req, res) {
   res.render("express_task");
});

app.post('/personpost', function (req, res) {
   var personInfo = req.body; //Get the parsed information from pug file body
 console.log(personInfo);

   if (!personInfo.name || !personInfo.age || !personInfo.nationality) {
      res.render('show_message', {
         message: "Sorry, you provided worng info", type: "error"
      });
   } else {
      var newPerson = new PersonModal({
         name: personInfo.name,
         age: personInfo.age,
         nationality: personInfo.nationality
      });

      newPerson.save(function (err, dt) {
         if (err) {
            res.render('show_message', { nouser: { message: "Database error", type: "error" } });
            console.log('there is error in code');
            // res.send("PROBLEM WHILE STORING");
         }
         else {
            res.render('show_message', {
               user: {
                  message: "New person added", type: "success", personName: personInfo.name, personAge: personInfo.age , nationality: personInfo.nationality
               }
            });
            console.log('we got the result');
            console.log(dt);
            // res.send("DATA STORED SUCCESSFULLY");
         }
      });
   }

});
// app.get("/viewall", (req, res) => {
//   PersonModal.find({}).then((blogs)=>{
//      res.send(blogs);
//      console.log(blogs);
//   }).catch((error)=>{
//       res.status(500).send(error);
//   });
//  });
//  app.get("/delete",(req,res)=>{
//      PersonModal.findOneAndDelete({_id:"61c4112d49da0d8c9e2a5c34"}).then((blogs)=>{
//          res.send(blogs);
//      }).catch((error)=>{
//          res.status(500).send(error);
//      });
//  });

app.listen(2000);