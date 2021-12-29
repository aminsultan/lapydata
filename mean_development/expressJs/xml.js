var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rss_db');

var express = require('express');
var app = express();

var bodyParser = require('rss-parser');
const { response } = require('express');

app.use(bodyParser.json());

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true }));

let parser = new bodyParser();
(async () => {

    let feed = await parser.parseURL('https://www.reddit.com/.rss');
    console.log(feed.title);
  
    feed.items.forEach(item => {
      console.log(item.title + ':' + item.link)
    });
  
  }).listen(2000);