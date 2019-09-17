//fym
// var Dog = require("./dog.js");
// var taidi = new Dog("taidy",5);
// var zangao = new Dog("zangao",8);
// taidi.on("bark",function(){
//     if(this.energy>=0){
//         console.log(this.name + " barked! energy:" + this.energy);
//     }
//     else{
//         clearInterval();
//     }
// })
// zangao.on("bark",function(){
//     if(this.energy>=0){
//         console.log(this.name + " barked! energy:" + this.energy);
//     }
//     else{
//         clearInterval();
//     }
// })

//teacher
var Dog = require("./dog.js");
var dog1 = new Dog("taidy",5);
function barkFun(){
    console.log(this.name + " barked! energy:" + this.energy);
}
dog1.on("bark",barkFun);
var intervalId = setInterval(function(){
    if(dog1.energy >= 0){
        dog1.emit("bark");
    }
    else{
        // clearInterval(intervalId);
        intervalId.unref();
    }
    dog1.energy = dog1.energy - 1;
},1000)
