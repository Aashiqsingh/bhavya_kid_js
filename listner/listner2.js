let box = document.getElementsByClassName("box")
// console.log(box);

box[0].addEventListener("mouseenter",()=>{
    box[2].style.borderRadius = "50%";
    box[2].style.backgroundColor = "red";
})

let = colors = ["red","blue","green","yellow"];
box[2].addEventListener("mousemove",()=>{
    box[0].style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
})
box[2].addEventListener("mouseleave",()=>{
    box[1].style.backgroundColor = "blue"
})