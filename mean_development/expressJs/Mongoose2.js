var mongoose = require("mongoose");
var express = require("express");
var app = express();

var bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.set('views', "./pug_files");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/registrationdb');

var personSchema = mongoose.Schema({
    name: String,
    age: Number,
    nationality: String
});
var Person = mongoose.model("Person", personSchema);

app.get("/", (req, res) => {
    res.render("myform");
});

app.post("/submitdata", (req, res) => {
    res.send(req.body.first + "<br>" + req.body.last);
    let newuser = new Person({
        name: req.body.first,
        age: req.body.age,
        nationality: req.body.last
    });
    newuser.save(function(err, personSchema){
        if(err) throw err;
        else {
            console.log(personSchema);
        }
    });
});

app.get("/viewall", (req, res) => {
    // Person.find({ "name": "Kanishka" }, "name", function (err, res) {
    //     if (err) throw err;
    //     else {
    //         console.log(res);
    //     }
    // });

    // Person.updateOne({"age": 56}, {"nationality":"Indian"}, (err, data)=>{
    //     if(err) throw err;
    //     console.log(data);
    // });

    // Person.findOneAndUpdate({ name: "First Name" }, { name: "Radhika", age: 40 }, function (err, response) {
    //     console.log(response);
    // });
    // res.send("viewing all");

    Person.remove({ "nationality": "Indian"}, (err, result) => {
        if(err) throw err;
        else{
            console.log("REMOVED SUCCESFULLY");
            res.send("REMOVED SUCCESFULLY");
        }
    });
});

app.listen(8000);