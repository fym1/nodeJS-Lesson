var arg1 = process.argv[2];
if(arg1 == "-h" || arg1 == undefined){
    console.log("帮助：命令参数需为算数运算式");
}
else{
    var result = eval(arg1);
    console.log(arg1 + "=" + result);
}