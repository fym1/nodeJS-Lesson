//1.引入http原生模块
const http = require("http");//http是原生模块,const定义常量，
const fs = require("fs")//fs是原生模块
const path = require("path");
//2.创建一个服务器
var server = http.createServer(function(req,res){
    //4.当客户端的http发起请求的时候，才会执行回调函数里面的内容
    var htmlPath = path.join(__dirname,"/view/index.html");
    //path.join() 方法使用平台特定的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
    var htmlContent = fs.readFileSync(htmlPath);
    htmlContent = htmlContent.toString("utf8");
    console.log(htmlContent);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
});
//3.服务监听一个端口
server.listen(8083);
console.log("server is listening 8083");