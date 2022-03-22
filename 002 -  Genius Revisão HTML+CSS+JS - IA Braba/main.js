const divMain = document.querySelector("main")
// const divs = document.querySelectorAll("main div")
const divs = divMain.querySelectorAll("div")
const sequencia = []

divMain.addEventListener("click", ev => {
    ev.target.classList.toggle("animate")
})

// for (let i = 0; i <= 3; i++) {
//     divs[i].addEventListener("animationend", ev => divs[i].classList.remove("animate"))
// }

divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function turno() {
    sequencia.forEach(num => {
        divs[num].classList.add("animate")
        // PARAMOS AQUI    
    })
    const rnd = Math.round(Math.random() * 3)
    divs[rnd].classList.add("animate")
    sequencia.push(rnd)
}
