function science(name,per){
    return name + " ur admision confirm in science with per " + per
}

function commerce(name,per){
    return name + " ur admision confirm in commerce with per " + per
}

function arts(name,per){
    return name + " ur admision confirm in arts with per " + per
}


var percentage = 56;
var flag;

if(percentage > 90)
{
    flag = science("bhavya",percentage)
}
else if(percentage > 70){
    flag = commerce("shrey",percentage)
}
else if(percentage > 50){
    flag = arts("ram",percentage)
}
else{
    console.log("You have to go hell...");
    
}

console.log(flag);
