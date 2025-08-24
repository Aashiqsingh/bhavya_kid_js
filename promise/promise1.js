function getData() {

    console.log("Starting .....");
    

    let promise = new Promise((resolve, reject) => {
        let data = true;
        setTimeout(() => {
            if (data) {
                resolve("data fetched successfully...");
            }
            else {
                reject("data fetched failed...");
            }
        }, 3000);
    })

    // console.log(promise);
    promise.then((data)=>{
        console.log(data);

        console.log("Ending...");

    })
    promise.catch((err)=>{
        console.log(err);
    })




}

getData()
// console.log("hello world");
