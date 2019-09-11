/**
 * 1.传入命令行参数，是一个算数运算式 1*2+3
 * 2.程序将算术运算式计算得到结果，并且在控制台输出1*2+3 = 5
 * 3.程序判断是否传入了命令行参数，如果没有传入，控制行输出“命令行参数错误”
 * 4.eval()计算算术运算式的结果
 */
//fym
// if(process.argv[2] == undefined){
//     console.log("命令行参数错误!");
// }
// else{
//     console.log(process.argv[2] + "=" + eval(process.argv[2]));
// }
//teacher
var arg1 = process.argv[2];
if(arg1 == undefined){
    console.log("命令行参数错误!");
}
if(arg1 == "-help"){
    console.log("帮助：命令参数需为算数运算式");
}
else{
    var result = eval(arg1);
    console.log(arg1 + "=%s" + result);
}