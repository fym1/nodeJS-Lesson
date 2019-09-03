//1.引入http原生模块
/**
 * require最常用的方法:
 * require(‘http’) 内置模块
 * require(‘./server’) “./”表示当前路径，后面跟的是相对路径
 * require(“../lib/server”) ../表示上一级目录，后面跟的也是相对路径
 */
const http = require("http");//http是原生模块,const定义常量，
const fs = require("fs")//fs是原生模块
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http发起请求的时候，才会执行回调函数里面的内容
    //5.process.platform得到当前程序执行所在操作系统
    var sys = process.platform;
    var htmlPath = "";
    switch(sys){
        case "linux":
            htmlPath = __dirname + "/view/index.html";
            break;
        case "win32":
            htmlPath = __dirname + "\\view\\index.html";
            break;
        default:
            console.log("unknow system");
            break;
    }
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlContent);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//3.服务监听一个端口
server.listen(8082);
console.log("server is listening 8082");