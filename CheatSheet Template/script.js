let copy = document.querySelectorAll(".copy")
let code = document.querySelectorAll(".code")

copy.forEach((e,i)=>{
    e.addEventListener("click",()=>{
        navigator.clipboard.writeText(code[i].textContent)
        setTimeout(() => {
            e.classList.toggle("fa-copy")
            e.classList.toggle("fa-check")
        }, 2000);
        e.classList.toggle("fa-copy")
        e.classList.toggle("fa-check")
    })
})
