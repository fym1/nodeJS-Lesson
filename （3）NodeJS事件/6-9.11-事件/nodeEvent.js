//引入events模块
const events = require("events");
//实例化EventEmitter对象
var eventEmitter = new events.EventEmitter();
//绑定事件及事件处理程序
//once表示触发一次事件
//on表示可触发多次
eventEmitter.on("hello",function(arg1,arg2){
    console.log("hello world");
    console.log(arg1,arg2);
})
//触发事件
eventEmitter.emit("hello","node","good");
eventEmitter.emit("hello");