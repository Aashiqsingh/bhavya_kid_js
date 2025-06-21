function writeName(){
    let name = document.getElementById("name")
    console.log(name.value);

    let message = document.getElementById("message")

    if(name.value.length < 3){
        // alert("Please enter atleast 3 characters");
        message.innerHTML = "Please enter atleast 3 characters";
        message.style.color = "red";
    }
    else{
        message.innerHTML = name.value
        message.style.color = "green";
    }
    
}