var express = require('express');
var router = express.Router();
var  mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/add',function(req,res,next){
  var title = req.body.title;
  var content = req.body.content;
  //创建数据库连接
  var con = mysql.createConnection(dbconfig);
  //连接数据库
  con.connect();
  //操作数据库：增删改查,不能把数据拼到操作里面,insert into chapters后面加上对应的字段
  //第一个参数：sql操作语句
  //第二个参数：内容数组，与？一一对应
  //第三个参数的两个参数：异常对象，返回结果
  con.query("insert into chapters(title,content) values(?,?)",[title,content],function(err,result){
      if(err){
        console.log(err);
      }
      else{
        console.log(result);
        res.end("insert success")
      }
  })
})
router.get("/list",function(req,res,next){
  //查询列表显示
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from chapters",function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.render("list",{chapterList:result});     
    }
  })

})
router.get("/del",function(req,res,next){
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from chapters where chapterid=?",[chapterId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("delete success");
    }
  })
})
/**
 * update chapters set content=?where chapterid = ?
 */
router.get("/update",function(req,res,next){
  var chapterId = req.query.chapterid;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("update chapters set content=?where chapterid = ?",[content,chapterId],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("update success");
    }
  })
})
module.exports = router;
