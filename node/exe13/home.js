
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send(' is my Home page using Express Router');
});

router.get('/home',function(req,res){
    res.send('Welcome to our home page with slash');
});

router.post('/home',function (req,res) {
    res.send('Data successfully uplaoded');
});
router.all('/',function(req,res){
    res.send('Data from all request');
});

module.exports=router;