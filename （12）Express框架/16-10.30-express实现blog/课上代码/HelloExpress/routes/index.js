var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//render：页面的渲染
//读取ejs文件内容,将文件中占位符<%=username %>
//替代成后端给定的数据（就是render的第二个参数）
//再将文件中的代码内容响应到客户端去
router.get('/list',function(req,res,next){
  res.render("list",{userName:"zhangsan",newList:[
    {"newId":1,newTitle:"标题1"},
    {"newId":2,newTitle:"标题2"}
  ]});
})

router.get('/index/list',function(req,res,next){
  res.end("list");
})

module.exports = router;
