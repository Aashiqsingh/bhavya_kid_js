const setData = ()=>{
    const name = document.getElementById("name");
    const age = document.getElementById("age");
    const email = document.getElementById("email");


    // console.log(name.value);
    // console.log(age.value);
    // console.log(email.value);

    localStorage.setItem("name",name.value);
    localStorage.setItem("age",age.value);
    localStorage.setItem("email",email.value);
    
}

const getData = ()=>{
    let emailStore = localStorage.getItem("email")
    let nameStore = localStorage.getItem("name")
    let ageStore = localStorage.getItem("age")


    let result = document.getElementById("result");
    result.innerHTML = nameStore + " " + ageStore + " " + emailStore;
}

const deleteData = ()=>{
    // localStorage.removeItem("name");
    // localStorage.removeItem("age");
    // localStorage.removeItem("email");

    localStorage.clear()
}

const getOtp = ()=>{
    let otp = Math.floor(1000 + Math.random() * 9000);
    console.log(otp);
    
}