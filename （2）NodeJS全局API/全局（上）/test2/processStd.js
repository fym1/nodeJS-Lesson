var i = 0;
var person={
    Name:1,
    Email:4,
    QQ:2,
    Mobile:3
}
console.log("Name:");
process.stdin.on("data",function(data){
    i++;
    switch(i){
        case 1:
            person.Name = data.toString();
            console.log("Email:");
            break;
        case 2:
            person.Email = data.toString();
            console.log("QQ:");
            break;
        case 3:
            person.QQ = data.toString();
            console.log("Mobile:");
            break;
        default:
            person.Mobile = data.toString();
            console.log(person);
            process.exit();
    }
})