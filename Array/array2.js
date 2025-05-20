var users = ["bhavya", "kiran", "priya","shrey","sumit","anush","nitin","vikas","ankur"];


// for(let i=0;i<users.length;i++){
//     console.log(users[i]);
// }

// user == users[i]

// users.forEach((user)=>{
//     console.log(user);
// })

users.forEach((user)=>{
    if(user.length > 5)
    {
        console.log(user.toUpperCase());
    }
})