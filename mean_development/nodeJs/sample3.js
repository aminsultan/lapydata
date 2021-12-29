var express = require('express');
var app = express();
var Parser = require('rss-parser');
var parser = new Parser();


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Reuters');
var itemSchema = mongoose.Schema({
    title: String,
    link: String,
    creator: String,
    pubDate: String
});

var Item = mongoose.model("Item", itemSchema);

app.post("/savedata", (req, res) => {
    (async () => {
        var feed = await parser.parseURL("https://www.reutersagency.com/feed/?taxonomy=best-sectors&post_type=best");
        console.log(feed.title);      

        feed.items.forEach(item => {
            console.log(item.title + item.link + item.creator + item.pubDate);

            var newItem = new Item({
                "title": item.title,
                "link": item.link,
                "creator": item.creator,
                "pubDate": item.pubDate
            });
            newItem.save(function (err, data) {
                if (err) throw err;
                else {
                    console.log(data);
                    // res.send("DATA STORED SUCCESSFULLY");
                    document.write("DATA STORED SUCCESSFULLY")
                }
            })
        });
    })();
})

app.set('view engine', 'pug');
app.set('views', '../Pug-files');
// app.get('/', (req, res) => {
//     res.render('view')
// })

app.get("/reuters", (req, res) => {
    Item.find({}, function (err, data) {
        console.log(data);
        res.render('view', {
            items: data
        });
        // res.send(data)
    })

});

app.listen(2000);


