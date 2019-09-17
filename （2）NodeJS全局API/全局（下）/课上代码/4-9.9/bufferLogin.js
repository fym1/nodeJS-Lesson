var userName = process.argv[2];
var passWord = process.argv[3];
if(userName != undefined && passWord != undefined){
    var loginStr = userName + ":" + passWord;
    console.log(loginStr);
    var buf1 = Buffer.from(loginStr,"utf-8");
    var base64Str = buf1.toString("base64");
    console.log(base64Str);
}
else{
    console.log("用户名密码不能为空");
}