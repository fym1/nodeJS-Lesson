function Bomb(){
    this.message = "bomb!!!";
    this.explode = function(){
        console.log(this.message);
    }
}
var Bomb = new Bomb();
setTimeout(function(){
    console.log(Bomb.message);
},2000);