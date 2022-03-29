const divMain = document.querySelector("main")
const divs = Array.from(divMain.querySelectorAll("div"))
const sequencia = []

let animatingColors = false
let currentColorPosition = 0

divMain.addEventListener("click", ev => {
    if (animatingColors) {
        console.log("espere a animação terminar")
        return
    }
    const idxClickedElement = divs.indexOf(ev.target)
    if (idxClickedElement !== sequencia(currentColorPosition)) {
        alert("perdeu playboy!")
    }
    currentColorPosition++
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
            animatingColors = index < sequencia.length - 1
        }, 1000 * index);
    })
}

function turno() {
    const rnd = Math.round(Math.random() * 3)
    sequencia.push(rnd)
    playAnimationColors()
}