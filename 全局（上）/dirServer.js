//1.引入http原生模块
/**
 * require最常用的方法:
 * require(‘http’) 内置模块
 * require(‘./server’) “./”表示当前路径，后面跟的是相对路径
 * require(“../lib/server”) ../表示上一级目录，后面跟的也是相对路径
 */
const http = require("http");//http是原生模块,const定义常量，
const fs = require("fs")//fs是原生模块
const url = require("url");
const path = require("path");
//2.创建一个服务器,只要有http请求，访问端口，就会执行回调函数里面的内容
var server = http.createServer(function(req,res){
    //req是请求对象，res是响应对象
    console.log(req.url);//req.url表示url地址中，端口（如baidu.com）以后的内容，是一个属性
    var urlObj = url.parse(req.url);//JSON.parse() 方法用来解析JSON字符串,使用了url.parse将req.url转化为了对象
    //console.log(urlObj);
    var urlPathName = urlObj.pathname;//对象提取pathname，资源路径
    console.log(urlPathName);
    //根据资源路径，可以决定执行哪一段代码
    if(urlPathName == "/favicon.ico"){
        res.end();
    }
    else if(urlPathName == "/"){
        //4.当客户端的http发起请求的时候，才会执行回调函数里面的内容
        var htmlPath = __dirname + "\\view\\index.html";//一个\表示转义
        var htmlContent = fs.readFileSync(htmlPath);
        htmlContent = htmlContent.toString("utf8");
        //console.log(htmlContent);
        res.writeHead(200,{"Content-Type":"text/html"});//该格式可以识别HTML结构，编码格式是UTF-8,这个方法有两个参数,第一个参数表示对应的编码的状态值,第二个表示对应的设置
        res.write(htmlContent);//输出相应的返回数据
        res.end();//用于快速结束没有任何数据的响应。
    }
    else if(urlPathName == "/js/index.js"){
        var jsPath = path.join(__dirname,"/js/index.js");
        var jsContent = fs.readFileSync(jsPath);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(jsContent);
        res.end();
        //console.log(jsContent);
    }
});
//3.服务监听一个端口
server.listen(8082);
console.log("server is listening 8082");