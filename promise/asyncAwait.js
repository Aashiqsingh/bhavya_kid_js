const getData = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({
                message:"Data fetched successfully..",
                status:200
            })
        },4000)
    })
}


// async function displayAnswer(){


//     console.log("Starting fetching data....");
    

//     const res = await getData()

//     console.log(res);


//     console.log("Data fetching completed.");
// }
// displayAnswer()


const displayAnswer = async()=>{


    console.log("Starting fetching data....");
    

    const res = await getData()

    console.log(res);


    console.log("Data fetching completed.");
}
displayAnswer()