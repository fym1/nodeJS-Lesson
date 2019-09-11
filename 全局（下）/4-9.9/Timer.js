
var timerId = setTimeout(function(){
    console.log("game over");
},3000);
timerId.unref();//阻止延时执行或者定时执行中回调函数的执行
timerId.ref();//与unref()方法抵消