const lasvegas = (option)=>{
    return option.fname + " ur tour is confirm in lasvegas with package " + option.amount
}

const newyork = (option)=>{
    return option.fname + " ur tour is confirm in newyork with package " + option.amount
}

const london = (option)=>{
    return option.fname + " ur tour is confirm in london with package " + option.amount
}

const goa = (option)=>{
    return option.fname + " ur tour is confirm in goa with package " + option.amount
}


// cb -- callback
const travel = (fname,budget,cb)=>{
    return cb({fname:fname,amount:budget})
    // console.log(x);

    // return x
    
}

var budget = 3001;
var ans;

if(budget > 4000)
{
    ans = travel("bhavya",budget,lasvegas)
}
else if(budget > 3000){
    ans= travel("shrey",budget,newyork)
}
else if(budget > 2000){
    ans = travel("ram",budget,london)
}
else if(budget > 1000){
    ans = travel("bhavya",budget,goa)
}
else{
    console.log("You have to go hell...");
}

console.log(ans);

