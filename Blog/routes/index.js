var express = require('express');
var router = express.Router();
var dbconfig = require("../config/data.json");
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login',function(req,res,next){
  res.render('login',{ title: 'Express' })
})
router.post('/login',function(req,res,next){
    var user = {
      'username': req.body.username, 
      'password': req.body.password
    };
    if(user.username == dbconfig.users[0].username && user.password == dbconfig.users[0].password){
      var chapterList = dbconfig.chapterList;
      res.render('list',{chapterList:chapterList,title: 'Express'})
    }
    else{
      res.render('error')
    }
})
module.exports = router;
