const fs = require("fs");
const http = require("http");
const path = require("path");
http.createServer(function(req,res){
    var arguments = process.argv[2];
    if(arguments == undefined){
        fs.open(__filename,"r+",function(err,fd){
            var buf = Buffer.alloc(100000);
            var len = fs.statSync(__filename).size;
            fs.read(fd,buf,0,len,0,function(err,bytesRead,buffer){
                if(err){
                    console.log(err);
                }
                if(bytesRead){
                    console.log(bytesRead);
                }
                else{
                    res.end(buffer.toString());
                    console.log(buffer.toString());
                }
                
            })
            // fs.close(fd,function(){
            //     console.log("操作完毕，关闭文件");
            // })
        })
    }
    else{
        var filePath = path.join(__dirname,arguments);
        var exist = fs.existsSync(filePath);
        if(exist == true){
            fs.open(filePath,"r+",function(err,fd){
                var buf = Buffer.alloc(1024);
                var len = fs.statSync(filePath).size;
                fs.read(fd,buf,0,len,0,function(err,bytesRead,buffer){
                    if(err){
                        console.log(err);
                    }
                    if(bytesRead){
                        console.log(bytesRead);
                    }
                    else{
                        res.end(buffer.toString());
                        console.log(buffer.toString());
                    }
                })
                // fs.close(fd,function(){
                //     console.log("操作完毕，关闭文件");
                // })
            })
        }
        else{
            console.log("文件不存在");
        }
    }
}).listen(8081);
console.log("server is listening 8081");