const fs = require("fs");
const Parser = require("rss-parser");
const { debuglog } = require("util");

var express = require("express");
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rss_db');

app.set ('view engine','pug');
app.set('views','./pugfiles');

(async () => {

    let parser = new Parser();

    let feed = await parser.parseURL('https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best');

    //   let items = [];

    //   const fileName = ${feed.title.replace}
    console.log(feed.items);

    var Itemschema = mongoose.Schema({
        title: String,
        link: String,
        // lastBuildDate: String,
        // language: String,
        // updatePeriod: String,
        // updateFrequency: Number,
        // generator: String,
        creator: String,
        pubDate: String,
        description: String,
        content: String,

    });

    var ITEM = mongoose.model("ITEM",Itemschema);

    feed.items.forEach(item => {
        console.log(Object.keys(item))
        console.log(item.title + ':' + item.link + ':' + item.creator + ':' + item.pubDate + ':' + item.content + ':');

        let newItem = new ITEM({
            "title": item.title,
            "link": item.link,
            "creator": item.creator,
            "pubDate": item.pubDate,
            // "description": item.description,
            "content": item.content
        });
        newItem.save(function(err,Itemschema){
            if(err) throw err;
            else{
                console.log(Itemschema)
                
            }
        });

        // app.get ('/post', (req,res)=>{
        //     res.render('rssfeed', {
        //     "title": item.title,
        //     "link": item.link,
        //     "creator": item.creator,
        //     "pubDate": item.pubDate,
        //     "description": item.description,
        //     "encoded": item.encode
        //     });
        // });

    });

    let para = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <style>

    </style>
    </head>
    <body>`;

    var MongoClient = require('mongodb').MongoClient;
    var mongourl = "mongodb://localhost:27017/";
    MongoClient.connect(mongourl, function (err, db) {
        if (err) throw err;
        var dbo = db.db("rss_db");
        dbo.collection("items").find({}).toArray(function (err, result) {
            if (err) throw err;
            for (i = 0; i < result.length; i++) {
                para += `<div>
                <h1> Title: ${result[i].title}</h1>
                <a href ="${result[i].link}">URL</a>
                <h2> Creator: ${result[i].creator}</h2>
                <p>Publishing Date: ${result[i].pubDate}</p>
                <p>First to Report: ${result[i].content}</p>

                <div>`;

            }
            para += `</body>
                </html>`;
            db.close();
            
        });
    });

    app.get('/', (req,res)=>{
        res.send(para);
    });

})();
app.listen(2000);