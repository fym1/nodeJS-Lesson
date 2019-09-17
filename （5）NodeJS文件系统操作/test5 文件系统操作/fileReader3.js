const fs = require("fs");
const http = require("http");
const path = require("path");
http.createServer(function(req,res){
    var arguments = process.argv[2];
    console.log(arguments);
    if(arguments == undefined){
        var resdStream = fs.createReadStream(__filename);
        resdStream.pipe(res);
    }
    else{
        var filePath = path.join(__dirname,arguments);
        var exist = fs.existsSync(filePath);
        if(exist == true){
            var resdStream1 = fs.createReadStream(filePath);
            resdStream1.pipe(res);
        }
        else{
            console.log("文件不存在");
        }
    }
}).listen(8081);
console.log("server is listening 8081");