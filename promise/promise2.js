// const getData = ()=>{

//     let promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             success({
//                 status:200,
//                 message:"Data fetched successfully..."
//             })
//         },3000);
//     })

//     promise.then((res)=>{
//         console.log(res);
//     })
//     promise.catch((err)=>{
//         console.log(err);
//     })

// }

// getData()


// const getData = ()=>{

//     let promise = new Promise((success,failure)=>{
//         setTimeout(()=>{
//             // success({
//             //     status:200,
//             //     message:"Data fetched successfully..."
//             // })
//             failure({
//                 status:400,
//                 message:"Data fetched failed..."
//             })
//         },3000);
//     })

//     return promise;

// }

// let ans = getData()
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


// const getData = ()=>{

//     return new Promise((success,failure)=>{
//         setTimeout(()=>{
//             // success({
//             //     status:200,
//             //     message:"Data fetched successfully..."
//             // })
//             failure({
//                 status:400,
//                 message:"Data fetched failed..."
//             })
//         },3000);
//     })


// }

// let ans = getData()
// ans.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


const getData = ()=>{

    return new Promise((success,failure)=>{
        setTimeout(()=>{
            // success({
            //     status:200,
            //     message:"Data fetched successfully..."
            // })
            failure({
                status:400,
                message:"Data fetched failed..."
            })
        },3000);
    })


}

getData().then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})