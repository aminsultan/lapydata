var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_db');

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// for parsing application/json
app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

var personSchema = mongoose.Schema({
   name: String,
   age: Number,
   nationality: String
});

var PersonModal = mongoose.model('mongousers', personSchema);

app.set('view engine', 'pug');
app.set('views', './pugfiles');

app.get('/register', function (req, res) {
   res.render('person_get');
});

app.post('/personpost', function (req, res) {
   var personInfo = req.body; //Get the parsed information
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
                  message: "New person added", type: "success", personName: personInfo.name, personAge: personInfo.age , nationality:personInfo.nationality
               }
            });
            console.log('we got the result');
            console.log(dt);
            // res.send("DATA STORED SUCCESSFULLY");
         }
      });
   }

});

app.listen(3000);