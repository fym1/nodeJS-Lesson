/**
 * 1.debugger可以设置断点
 * 2.node inspect(debug) 文件名  启动文件
 * 3.c 到断点之后继续执行
 * 4.watch('变量名') 监听变量
 * 5.watchers 查看监听的变量
 * 6.unwatch('变量名')  解除监听
 * 7.restart 重启脚本
 */
const http = require("http");
const fs = require("fs");
const path = require("path");
const url = require("url");
debugger;//设置断点
http.createServer(function(req,res){
    //parse() 方法可解析一个日期时间字符串，并返回 1970/1/1 午夜距离该日期时间的毫秒数。
    var urlObj = url.parse(req.url,true);//req.url请求地址端口以后的内容
    debugger;
    var pathName = urlObj.pathname;
    switch(pathName){
        case "/":
            //http://localhost:8081/
            showIndex(res);
            break;
        /**
         * 网页文件在浏览器解析的过程中，如果需要一些资源，会再次向服务端发起请求
         * 如图片、音频、视频、js脚本、css文件
         */
        case "/1.png":
            showImage(res);
            break;
        case "/getfilelist":
            showList(res);
            break;
        case "/delfile":
            delFile(urlObj,res);
            break;
        case "/getfile":
            getFile(urlObj,res);
            break;
        case "/getchildfile":
            getChildFile(urlObj,res);
            break;
    }
}).listen(8081);
var list =[];
function showIndex(res){
    var indexPath = path.join(__dirname,"index.html");
    var fileContent = fs.readFileSync(indexPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(fileContent);
    res.end();
}
function showImage(res){
    var imagePath = path.join(__dirname,"1.png");
    var fileContent = fs.readFileSync(imagePath);
    res.writeHead(200,{"Content-Type":"image/png"});
    res.write(fileContent);
    res.end();
}
function showList(res){
    list = [];
    var filePath = path.join(__dirname,"fileDir");
    var files = fs.readdirSync(filePath);
    for(var i = 0;i < files.length;i++){
        var fileObj = {};
        var childPath = path.join(filePath,files[i]);
        var statObj = fs.statSync(childPath);
        console.log(statObj);
        if(statObj.isFile()){
            fileObj.fileType = "file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime=birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+1)
        +"-"+birthTimer.getDate()+ " " + birthTimer.getHours()+":"+birthTimer.getMinutes()
        +":"+birthTimer.getSeconds();
        list.push(fileObj);
    }
    console.log(list);
    var listStr = JSON.stringify(list);
    res.writeHead(200,{"Content-Type":"text/plain"});
    res.write(listStr);
    res.end();
}
function delFile(urlObj,res){
    var timer = urlObj.query.createtime;
    for(var i = 0;i<list.length;i++){
        if(list[i].createTime == timer){
            deleteRealFile(list[i].fileName);
        }
    }
    res.end("success");
}
function deleteRealFile(fileName){
    var filePath = path.join(__dirname,"fileDir",fileName);
    var statObj = fs.statSync(filePath);
    if(statObj.isFile()){
        fs.unlinkSync(filePath);
    }
    else{
        delDir(filePath);
    }
}
function delDir(filePath){
    var files = fs.readdirSync(filePath);
    for(var i = 0;i < files.length;i++){
        var childPath = path.join(filePath,files[i])
        var childStatObj = fs.statSync(childPath);
        if(childStatObj.isFile()){
            fs.unlinkSync(childPath);
        }
        else if(childStatObj.isDirectory()){
            delDir(childPath);
        }
    }
    fs.rmdirSync(filePath);
}
function getFile(urlObj,res){
    var createTime = urlObj.query.createtime;
    for(var i = 0;i<list.length;i++){
        if(list[i].createTime == createTime){
            showContent(list[i].fileName,res);
        }
    }   
}
function showContent(fileName,res){
    var filePath = path.join(__dirname,"fileDir",fileName);
    fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
        }
        else{
            res.end(data);
        }
    })
}
function getChildFile(urlObj,res){
    var timer = urlObj.query.createtime;
    for(var i = 0;i < list.length;i++){
        if(list[i].createTime == timer){
            getChildList(list[i].fileName,res);
        }
    }
}
function getChildList(fileName,res){
    var filePath = path.join(__dirname,"fileDir",fileName);
    var files = fs.readdirSync(filePath);
    var childList = [];
    for(var i = 0;i < files.length;i++){        
        var fileObj = {};
        var statObj = fs.statSync(path.join(filePath,files[i]));
        if(statObj.isFile()){
            fileObj.fileType = "file";
        }
        else if(statObj.isDirectory()){
            fileObj.fileType = "folder";
        }
        fileObj.fileName = files[i];
        fileObj.fileSize = statObj.size;
        var birthTimer = new Date(statObj.birthtime);
        fileObj.createTime = birthTimer.getFullYear()+"-"+(birthTimer.getMonth()+1)
        +"-"+birthTimer.getDate()+ " " + birthTimer.getHours()+":"+birthTimer.getMinutes()
        +":"+birthTimer.getSeconds();
        childList.push(fileObj);
    }
    var childStr = JSON.stringify(childList);
    res.end(childStr);
}