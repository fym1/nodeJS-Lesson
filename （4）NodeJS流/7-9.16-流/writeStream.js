const fs = require("fs");
const path = require("path");
var filePath = path.join(__dirname,"/stream.txt");
var writePath = path.join(__dirname,"/write.txt");
var resdStream = fs.createReadStream(filePath);
console.log(resdStream);
var writeStream = fs.createWriteStream(writePath);
resdStream.pipe(writeStream);
