function loop(){
    console.log("I will loop forver!");
}
setInterval(loop,500);
setTimeout(function(){
    console.log("Game Over!");
    process.exit();
},5000);