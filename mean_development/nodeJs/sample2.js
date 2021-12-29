var express = require("express");
var app = express();

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/office_db');

// var bodyParser = require('body-parser');
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// var personSchema = mongoose.Schema({
//     StartDate: String,
//     EndDate: String
// });

// var Person = mongoose.model("Person", personSchema);

let para = `<!DOCTYPE html>
    <html lang="en">
    <head>
    
    </head>
    <body>`;

    var MongoClient = require('mongodb').MongoClient;
    var mongourl = "mongodb://localhost:27017/";
    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db("office_db");
        dbo.collection("invoices").find({})
        .toArray(function (err, result) {
            if (err) throw err;
            
let issuedate =result ;
//  let duedate =result[i].DueDate ;
            
            for (i = 0; i < result.length; i++) {
                para += `<td>
                <p> invoice:${result[i].InvoiceNumber}</p>
                <p>Date: ${result[i].IssueDate}</p>
                <p>Date: ${result[i].DueDate}</p>
                
               

                <td>`;

            }
            para += `</body>
                </html>`;
            db.close();

           console.log(issuedate);
            
        });
        
    });

    

    app.get('/', (req,res)=>{
        res.send(para);
        
    });
    app.listen(2000);
