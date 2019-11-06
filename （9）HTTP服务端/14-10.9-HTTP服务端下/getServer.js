const http = require('http');
const url = require('url');
http.createServer(function(req,res){
    /**
     * 哪些请求发起的是get请求
     * 1.点击超链接
     * 2.地址栏通过网址请求
     * 3.通过ajax发起请求，ajax() 方法通过 HTTP 请求加载远程数据
     * 接收get请求的参数
     * req.url(http.IncomingMessage.url);
     * 提取url上有效数据，例如资源路径、参数
     * 可以借助于url模块（原生模块），url.parse(req.url,true),url.parse()可以将一个完整的URL地址，分为很多部分，常用的有：host、port、pathname、path、query。
     * req.url指的是端口以后的内容
     */
    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
}).listen(8081);
console.log('server is listening 8081');