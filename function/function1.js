//  function -- function keyword
// return -- return keyword

// 1. without return type  without argument


function demo(){
    console.log("Demo function is called.....");
    
}

// demo()

// . without return type with argument 

function add(x,y){
    console.log("Addition = ",x+y);
    
}

// add(3,4)
// add("shree","ram")

//  3. with return type without argument 

function greet(){
    return "Greet function called...."
}

// let ans = greet()
// console.log(ans);

// console.log(greet());


//  4. with return type with argument 

function mul(a,b,c){
    return a*b*c
}

let ans = mul(2,3,4)
console.log("mutiply = ",ans);
