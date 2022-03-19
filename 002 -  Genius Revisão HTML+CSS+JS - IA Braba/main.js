const divMain = document.querySelector("main")
// const divs = document.querySelectorAll("main div")
const divs = divMain.querySelectorAll("div")

const rnd = Math.round(Math.random() * 3)
divs[rnd].classList.add("animate")

divMain.addEventListener("click", (ev) => { 
    ev.target.classList.toggle("animate") 
})