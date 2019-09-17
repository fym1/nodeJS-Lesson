//fym
// const events = require("events");
// const EventEmitter = events.EventEmitter;
// function Dog(name,energy){
//     EventEmitter.call(this);
//     this.name = name;
//     this.energy = energy;
//     var that = this;
//     setInterval(function(){
//         that.energy--;
//         that.emit("bark");
//     },1000);
    
// }
// Dog.prototype.__proto__ = EventEmitter.prototype;
// module.exports = Dog;

//teacher
//原生模块，核心模块
const events = require("events");
var EventEmitter = events.EventEmitter;
function Dog(name,energy){
    EventEmitter.call(this);
    this.name = name;
    this.energy = energy;
}
Dog.prototype.__proto__ = EventEmitter.prototype;
module.exports = Dog;