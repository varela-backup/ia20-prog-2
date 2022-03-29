const divMain = document.querySelector("main")
const divs = divMain.querySelectorAll("div")
const sequencia = []

let animatingColors = false

divMain.addEventListener("click", ev => {
    if (animatingColors) {
        console.log("espere a animação terminar")
        return
    }
    ev.target.classList.add("animate")
})

divs.forEach(div => {
    div.addEventListener("animationend", () => {
        div.classList.remove("animate")
    })
})

function playAnimationColors() {
    sequencia.forEach((current, index) => {
        setTimeout(() => {
            divs[current].classList.add("animate");
        }, 1000 * index);
    })
}

function turno() {
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}