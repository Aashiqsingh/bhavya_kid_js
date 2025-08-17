const submitHandler = (event)=>{
    event.preventDefault(); // Prevent the default form submission behavior
    // alert("Form submitted successfully!");

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let age = document.getElementById("age");

    let result = document.getElementById("result");
    let nameErr = document.getElementById("nameErr");
    let emailErr = document.getElementById("emailErr");
    let ageErr = document.getElementById("ageErr");


    // console.log(name.value);
    // console.log(email.value);
    // console.log(age.value);

    const user = {
        name:name.value,
        email:email.value,
        age:age.value
    }
    
    // console.log(user);
    // result.innerHTML = user
    // let ans = JSON.stringify(user);
    // result.innerHTML = ans;

    // console.log(ans[0]);

    if(name.value == ""){
        nameErr.innerHTML = "*Name is required";
        nameErr.style.color = "red";
    }
    else if(name.value.length < 4){
        nameErr.innerHTML = "Name should be atleast 4 characters";
        nameErr.style.color = "red";
    }
    else{
        nameErr.innerHTML = name.value;
        nameErr.style.color = "green";
    
    }
    
    


    console.log("Form submitted successfully!");
    
}