var express = require("express");

var router = express.Router();

router.get('/',(req,res)=>{
res.send('this is route1 means express4.js file');

});

module.exports = router;