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
    let x = cb({fname:fname,amount:budget})
    console.log(x);
    
}

var budget = 4001;

if(budget > 4000)
{
    travel("bhavya",budget,lasvegas)
}
else if(budget > 3000){
    travel("shrey",budget,newyork)
}
else if(budget > 2000){
    travel("ram",budget,london)
}
else if(budget > 1000){
    travel("bhavya",budget,goa)
}
else{
    console.log("You have to go hell...");
}
