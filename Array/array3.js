var users = ["bhavya", "kiran", "priya","shrey","sumit","anush","nitin","vikas","ankur"];

// var flag = false;

// for(let i=0;i<users.length;i++){

//     if(users[i].length > 5)
//     {
//         flag = true;
//     }
// }
// console.log(flag);

// let x = users.some((user)=>{
//     return user.length > 5
// })

// console.log(x);

// let x = users.some((user)=>{
//     return user.startsWith("z")
// })

// console.log(x);

let x = users.some((user)=>user.startsWith("z"))

console.log(x);