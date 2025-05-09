function science(name,per){
    console.log(name + " ur admision confirm in science with per " + per);
}

function commerce(name,per){
    console.log(name + " ur admision confirm in commerce with per " + per);
}

function arts(name,per){
    console.log(name + " ur admision confirm in arts with per " + per);
}


var percentage = 56;

if(percentage > 90)
{
    science("bhavya",percentage)
}
else if(percentage > 70){
    commerce("shrey",percentage)
}
else if(percentage > 50){
    arts("ram",percentage)
}
else{
    console.log("You have to go hell...");
    
}