var users = ["bhavya", "kiran", "priya","shrey","sumit","anush","nitin","vikas","ankur"];

// users.forEach((user)=>{
//     console.log(user);
// })

// map : it will return new array with same length 


// let x = users.map((user)=>{
//     return user.toUpperCase()
// })
// console.log(x);


// filter : it will return new array with modfied data 

// let x = users.filter((user)=>{
//     return user.length > 5
// })

// console.log(x);



var x = users.filter((user)=>{
    return user != "nitin"
})
console.log(x);

