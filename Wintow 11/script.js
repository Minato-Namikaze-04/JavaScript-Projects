let taskbar = document.querySelector(".taskbar")
let startmenu = document.querySelector(".menu")

taskbar.addEventListener("click",()=>{
    startmenu.classList.toggle("show")
})