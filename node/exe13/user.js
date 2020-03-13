var express = require('express');
var router = express.Router();

router.get('/1',function(req,res){
    res.json({name:'Jahn',Age:23});
});

router.all('/',function(req,res){
    res.send("This is request for all methods");
});

module.exports=router;