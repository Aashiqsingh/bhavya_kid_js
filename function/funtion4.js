function lasvegas(option){
    return option.fname + " ur tour is confirm in lasvegas with package " + option.amount
}

function newyork(option){
    return option.fname + " ur tour is confirm in newyork with package " + option.amount
}

function london(option){
    return option.fname + " ur tour is confirm in london with package " + option.amount
}

function goa(option){
    return option.fname + " ur tour is confirm in goa with package " + option.amount
}

let budget = 4000;
var ans;

if(budget >= 4000)
{
    ans = lasvegas({fname:"bhavya",amount:budget})
}
else if(budget > 3000){
    ans = newyork({fname:"shrey",amount:budget})
}
else if(budget > 2000){
    ans = london({fname:"ram",amount:budget})
}
else if(budget > 1000){
    ans = goa({fname:"bhavya",amount:budget})
}
else{
    console.log("You have to go hell...");
}

console.log(ans);
