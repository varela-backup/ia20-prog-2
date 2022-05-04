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

