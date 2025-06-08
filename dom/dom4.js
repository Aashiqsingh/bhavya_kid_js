// let a = 1;

var colors = ["red", "green", "blue", "yellow", "orange", "purple", "black", "white"];

function changeColor(){

    // console.log("hello");
    // console.log(a++);
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(randomIndex);

    let mydiv = document.getElementById("mydiv")
    mydiv.style.backgroundColor = colors[randomIndex]
    
    
}