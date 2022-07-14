// const Mode = document.querySelector(".dark-mode")
// Mode.addEventListener("click", function(){
//     document.body.classList.toggle("dark-theme")
//     if(document.body.classList.contains("dark-theme")){
//         Mode.src = "../assets/img/moon.png"
//     } else {
//         Mode.src = "../assets/img/sun.png"
//     }
// })


const toggle = document.querySelector(".dark-mode");
const body = document.querySelector("body");

toggle.addEventListener("click", function(){;
    this.classList.toggle("bx-sun");

    if(this.classList.toggle("bx-moon")){
        body.style.background = "white";
        body.style.color = "black";
        body.style.transition = ".6s";
    } else {
        body.style.background = "black";
        body.style.color = "white";
        body.style.transition = ".6s";
    }
})


// Navbar 

const Toggle = document.querySelector(".toggle");
const Navbar = document.querySelector("nav ul");
Toggle.addEventListener("click", function(){
    Navbar.classList.toggle("active")
})