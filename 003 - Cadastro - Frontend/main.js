const maskElements = document.querySelectorAll("[data-mascara]")

const fnMasks = {
    matricula: maskMatricula
}

function maskMatricula(el) {
    el.addEventListener("keydown", ev => { 
        const key = ev.key
        if (key == "a") {
            ev.preventDefault()
        }
    })
}

maskElements.forEach(el => {
    const maskName = el.dataset.mascara
    const fnMascara = fnMasks[maskName]
    fnMascara(el)
})

const x = document.querySelector(".modal")
const main = document.querySelector("main")
let i = 100;
while(i--) {
    const z = x.cloneNode(true)
    main.appendChild(z)
}