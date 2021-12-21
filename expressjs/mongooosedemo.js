
var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/my_db');

var personSchema = mongoose.Schema({
    fname: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

app.get('/person', function (req, res) {
    res.render('person');
    // res.sendFile(__dirname + "/" + "abc.html");
});

app.post('/person', function (req, res) {
    var personInfo = req.body; //Get the parsed information
    console.log(personInfo);
    
    if (!personInfo.fname || !personInfo.age || !personInfo.nationality) {
        res.render('show_message', {
            message: "Sorry, you provided worng info", type: "error"
        });
    } else {
        var newPerson = new Person({
            fname: personInfo.fname,
            age: personInfo.age,
            nationality: personInfo.nationality
        });

        newPerson.save(function (err, Person) {
            if (err)
                res.render('show_message', { message: "Database error", type: "error" });
            else
                res.render('show_message', {
                    message: "New person added", type: "success", person: personInfo
                });
        });
    }
});
app.listen(3000);