var express = require("express");
var router = express.Router();

router.get('/', (req,res)=>{
    res.send('this is route 2 means express5.js file is executing');

});
module.exports = router;