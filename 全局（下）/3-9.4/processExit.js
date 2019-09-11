/**
 * process.exit() 方法以退出状态 code 指示 Node.js 同步地终止进程
 * process.kill(pid[, signal])方法将signal发送给pid标识的进程。
 *  pid <number> 进程ID
 *  signal <string> | <number> 将发送的信号，类型为string或number。默认为'SIGTERM'。
 */
var arg1 = process.argv[2];
if(arg1 == "e"){
    process.exit();
}
else if(arg1 == "k"){
    process.kill(process.pid);
}
else{
    setTimeout(function(){
        console.log("延时结束");
    },5000)
}