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
   mail: String,
   password: String,
   phone: Number
});

var PersonModal = mongoose.model('mongosignup', personSchema);

app.set('view engine', 'pug');
app.set('views', './pugfiles');

app.get('/signup', function (req, res) {
   res.render('SignUp');
});

app.post('/person', function (req, res) {
   var personInfo = req.body; //Get the parsed information
   console.log(personInfo);

   if (!personInfo.name || !personInfo.mail || !personInfo.password || !personInfo.phone) {
      res.render('msg_signedup', {
         nouser: {
            message: "Sorry, you provided worng info", type: "error"
         }
      });
   }
   else {
      var newPerson = new PersonModal({
         name: personInfo.name,
         mail: personInfo.mail,
         password: personInfo.password,
         phone: personInfo.phone
      });

      newPerson.save(function (err, dt) {
         if (err) {
            console.log('there is an error in code');
            res.render('msg_signedup', { user: { message: "Database error", type: "error" } });

            // res.send("PROBLEM WHILE STORING");
         }
         else {
            console.log('we got the result');
            console.log(dt);
            res.render('msg_signedup', {
               user: {
                  message: "Hi! Now you are our family member", personName: personInfo.name, personMail: personInfo.mail, personPassword: personInfo.password, Phone: personInfo.phone
               }
            });



            // res.send("DATA STORED SUCCESSFULLY");
         }
      });
   }

});

app.get('/login', function (req, res) {
   res.render('Login');
});

app.post('/personlogin',(req,res)=>{
   var personInfo = req.body; 
   console.log(personInfo);
});

app.listen(3000);