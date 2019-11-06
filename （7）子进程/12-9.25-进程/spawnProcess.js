const cp = require("child_process");
var childProcess = cp.spawn("node",["childProcess.js"]);
var result="";
// childProcess.stdin.on("data",function(chunk){
//     console.log(chunk);
//     result += chunk;
// })
childProcess.stdout.on("data",function(){
    
})
childProcess.stdin.on("close",function(chunk){
    console.log(result);  
})