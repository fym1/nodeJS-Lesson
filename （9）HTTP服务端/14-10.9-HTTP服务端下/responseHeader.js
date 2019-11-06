const http = require("http");
http.createServer(function(req,res){
    // res.writeHead(200,{"Content-Type":"textml"});
    //响应内容的字节长度
    // res.setHeader("Content-Length",20);
    //服务端压缩方式设置
    // res.setHeader("Conent-Encoding","gzip");
    //服务端响应时间
    res.setHeader("Date",(new Date().toLocaleString()));
    res.setHeader("Set-Cookie",'name=zhangsan');
    res.end("hello world");
}).listen(8081)