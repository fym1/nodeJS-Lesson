function Bomb(){
    var that = this;
    Bomb.prototype.message = "bomb!!!";
    Bomb.prototype.explode = function(){
        console.log(that.message);
    }
}
var Bomb = new Bomb();
// setTimeout(function(){
//     console.log(Bomb.message);
// },2000);
setTimeout(Bomb.explode,2000);