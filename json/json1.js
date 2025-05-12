// var student = {
//     id:1,
//     name:"bhavya",
//     email:"bhavya@gmail.com",
//     age:17,
//     isActive:true,
//     gender:"male"
// }

// console.log(student);
// console.log(student.name);
// console.log(student.email);
// console.log(student.gender);

// console.log(typeof student);




var product = {
    id:1,
    name:"I phone",
    price:98767,
    color:["red","white","black","grey"],
    isAvailable:true,
    description:{
        ram:"8gb",
        model:"iphone 16",
        storage:"1tb",
        camera:"50mp",
        battery:"5000mh"
    }
}

console.log(product);
console.log(product.name);
console.log(product.price);
console.log(product.color);
console.log(product.color[0]);


for(let i=0;i<product.color.length;i++)
{
    console.log(product.color[i]);
    
}

console.log(product.description);
console.log(product.description.model);






