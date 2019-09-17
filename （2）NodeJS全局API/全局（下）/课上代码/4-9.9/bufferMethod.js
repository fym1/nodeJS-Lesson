//slice 裁剪操作
var buf1 = Buffer.from("hello world","utf-8");
console.log(buf1);
console.log(buf1.toString("utf-8"));
var buf2 = buf1.slice(0,5);
console.log(buf2.toString("utf-8"));
