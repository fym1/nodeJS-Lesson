const fs = require("fs");
const http = require("http");
const path = require("path");
http.createServer(function(req,res){
    var arguments = process.argv[2];
    console.log(arguments);
    if(arguments == undefined){
        fs.readFile(__filename,function(err,data){
            if(err){
                console.log(err);
            }
            else{
                res.end(data.toString());
            }
        })
    }
    else{
        var filePath = path.join(__dirname,arguments);
        var exist = fs.existsSync(filePath);
        if(exist == true){
            fs.readFile(filePath,function(err,data){
                if(err){
                    console.log(err);
                }
                else{
                    res.end(data.toString());
                }
            })
        }
        else{
            console.log("文件不存在");
        }
    }
}).listen(8081);
console.log("server is listening 8081");