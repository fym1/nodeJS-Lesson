//Buffer.alloc(size[, fill[, encoding]])
//分配一个大小为 size 字节的新 Buffer。 如果 fill 为 undefined，则用零填充 Buffer。
var buf = Buffer.alloc(10);
console.log(buf);
//讲一个utf-8编码的字符串转化为buffer数据
var buf1 = Buffer.from("hello","utf-8");
console.log(buf1);

var base64Str = buf1.toString("base64");
var buf2 = Buffer.from(base64Str,"base64");
console.log(buf2.toString("utf8"));