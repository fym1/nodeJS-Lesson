//fym06
// var child = require("./circleModule.js");
// child.circumference(2);
// child.area(2);

//fym05
// var child = require("./circleModule.js");
// child.circleFun(2);

//teacher05
var circleModule = require("./circleModule.js");
var r = process.argv[2];
var circleObj = circleModule.circleFun(r);
console.log("圆的半径为：" + r);
console.log("圆的周长为：" + circleObj.circumference());
console.log("圆的面积为：" + circleObj.area());

