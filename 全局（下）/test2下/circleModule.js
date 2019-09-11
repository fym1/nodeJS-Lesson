//fym07
// var circleFun={
//     circumference:function(r){
//         this.circumference = 2*3.14*r;
//         console.log(this.circumference);
//     },
//     area:function(r){
//         this.area = 3.14*3.14*r;
//         console.log(this.area);
//     }
// }
// module.exports = circleFun;

//fym05
// var circleFun = function(r){
//     var circle={};
//     function circumference(r){
//         circle.circumference = 2*r*3.14;
//     }
//     function area(r){
//         circle.area = 3.14*r*3.14;
//     }
//     console.log(circle);
// }
// module.exports = circleFun;

//teacher05
function circleFun(r){
    function circumference(){
        return 2*Math.PI*r;
    }
    function area(){
        return Math.PI*r*r;
    }
    return{circumference:circumference,area:area};
}
module.exports = {
    circleFun:circleFun
}