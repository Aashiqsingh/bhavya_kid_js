

let mydiv = document.getElementById("mydiv");
function getData(){

    let h1 = document.createElement("h1")
    h1.innerHTML = "Royal technosft club"


    let link = document.createElement("a")
    link.innerHTML = "google"
    // link.href = "https://www.google.com"
    link.setAttribute("href","https://www.google.com")
    link.addEventListener("mouseleave",()=>{
        link.href = "https://www.netflix.com"
        link.target = "_blank"
    })


    mydiv.appendChild(h1)
    mydiv.appendChild(link)
}