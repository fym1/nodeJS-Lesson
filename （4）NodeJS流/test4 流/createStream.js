const stream = require("stream");
var reader = stream.Readable;
function MyReadable(){
    Readable.call(this);
    reader.push("abcdefghijklmnopqrstuvwxyz");
    reader.push(null);
    reader.pipe(process.stdout);
}
MyReadable.prototype.__proto__ = Readable.prototype;
var read = new MyReadable;