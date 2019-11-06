const http = require("http");
const querystring = require("querystring");//把对象转换为服务器端可以接收的字符串
var str = querystring.stringify(infor);
var infor = {"user":"zhangsan"};
var options = {
    host:"localhost",
    port:8081,
    path:"/",
    method:"post"
}
var req = http.request(options,function(res){

});
req.write(str);
req.end();