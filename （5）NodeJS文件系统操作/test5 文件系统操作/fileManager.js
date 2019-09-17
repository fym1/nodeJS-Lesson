const fs = require("fs");
const path = require("path");
var i = 0;
console.log("请输入要创建的文件夹:");
process.stdin.on("data",function(data){
    i++;
    switch(i){
        case 1:
            fs.mkdirSync(data.toString());
            console.log("请输入要创建的文件:");
            break;
        case 2:
            person.Email = data.toString();
            console.log("请输入要删除的文件:");
            break;
        default:
            person.Mobile = data.toString();
            console.log(person);
            process.exit();
    }
})