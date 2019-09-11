/**
 * 调试
 * 1.监测代码是否执行到console.log的位置
 * 2.可以输出一些变量的值，判断程序的执行状态
 */
/**
 * 占位符：
 * %d 数字
 * %s 字符串
 * %j JSON数组
 */
var user = {
    username:"zhangsan",
    age:20,
    qq:"1668576168"
}
console.log("username:%s",user.username);
console.log("age:%d",user.age);
console.log("user:%j",user);
