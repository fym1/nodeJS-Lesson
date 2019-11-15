const fs = require("fs");
const http = require("http");
const path = require("path");
const url = require("url");
http.createServer(function(req,res){
    var pathname = url.parse(req.url).pathname;
    if(pathname == '/')
    {
        pathname = "index.html";
    }
    //扩展名
    var extname = path.extname(pathname);
    fs.readFile("./"+pathname,function(err,data){
        var mime = getMime(extname);
        res.writeHead(200,{"Content-type":"mime"});
        res.end(data);
    });
    // var urlObj = url.parse(req.url);
    // var pathName = urlObj.pathname;
    // if(pathName == '/'){
    //     var fileContent = fs.readFileSync("index.html");
    //     res.writeHead(200,{"Content-Type":"Text/html"});
    //     res.write(fileContent);
    //     res.end();
    // }
    // else if(pathName == "/getList"){
    //     var list = [{"username":"zhangsan","age":20}];
    //     var str = JSON.stringify(list);
    //     res.end(str);
    // }
}).listen(8083);
function getMime(extname){
    switch(extname){
        case ".html":
            return "text/html";
            break;
        case ".png":
            return "image/png";
            break;
    }
}
console.log("server is listening 8081");