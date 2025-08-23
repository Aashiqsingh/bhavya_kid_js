const getDate = ()=>{
    // const date = new Date()

    // console.log(date);
    // console.log("Date : ",date.getDate());
    // console.log("Month : ",date.getMonth() + 1);
    // console.log("Year : ",date.getFullYear());
    // console.log("Hours : ",date.getHours());
    // console.log("Minutes : ",date.getMinutes());
    // console.log("Seconds : ",date.getSeconds());
    // console.log("Milliseconds : ",date.getMilliseconds());
    // console.log("Day : ",date.getDay());
    // console.log("milisecond ...",date.getTime());
    
    

    const date2 = new Date();

    date2.setFullYear(2022);
    date2.setMonth(1);
    date2.setDate(1);
    date2.setHours(17);
    date2.setMinutes(30);
    date2.setSeconds(40);
    date2.setMilliseconds(0);

    console.log("Date : ",date2.getDate());
    console.log("Month : ",date2.getMonth() + 1);
    console.log("Year : ",date2.getFullYear());
    console.log("Hours : ",date2.getHours());
    console.log("Minutes : ",date2.getMinutes());
    console.log("Seconds : ",date2.getSeconds());
    console.log("Milliseconds : ",date2.getMilliseconds());









    
}

getDate()