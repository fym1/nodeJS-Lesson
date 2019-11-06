//创建server的两种方式
const http = require("http");

const server = new http.Server();
server.listen(8081);
server.on('request',function(req,res){
    res.end('hello node');
});

var server = http.createServer(function(req,res){
    res.end('hello node');
})