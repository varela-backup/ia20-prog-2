// const maskElements = document.querySelectorAll("[data-mascara]")

// const fnMasks = {
//     matricula: maskMatricula
// }

// function maskMatricula(el) {
//     el.addEventListener("keydown", ev => { 
//         const key = ev.key
//         if (key == "a") {
//             ev.preventDefault()
//         }
//     })
// }

// maskElements.forEach(el => {
//     const maskName = el.dataset.mascara
//     const fnMascara = fnMasks[maskName]
//     fnMascara(el)
// })

const actionBar = document.querySelector("div.action-bar")
const btAdd = actionBar.querySelector(".bt-add")
const container = document.querySelector(".container-data")
const templateModalAluno = container.querySelector("template.aluno")

btAdd.addEventListener("click", () => {
    const cloneModal = templateModalAluno.content.cloneNode(true)

    // CLONAR E ADICIONO A FUNCIONALIDADE (altenativa de abordagem)
    // const btSave = cloneModal.querySelector(".bt-save")
    // btSave.addEventListener("click", ev => alert("asdasd"))

    container.prepend(cloneModal)
})

container.addEventListener("click", async ev => {
    let button

    //
    //
    //
    if (ev.target.closest(".bt-close")) {
        const modal = ev.target.closest(".modal")
        modal.remove()
        return
    }

    //
    //
    //
    if (button = ev.target.closest(".bt-save")) {
        const form = ev.target.closest(".modal").querySelector("form")
        console.log(button, form)

        form.addEventListener("submit", async ev => {
            ev.preventDefault()
            button.setAttribute("disabled", true)
            const req = await fetch("http://127.0.0.1:4000/aluno", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome: form.nome.value,
                    dataNasc: form.dataNasc.value,
                    matricula: form.matricula.value,
                })
            })

            if (req.status == 200) {
                alert("salvamos seus dados no servidor!")
                button.removeAttribute("disabled")
                return
            }

            button.innerHTML = "ERRO!"
            alert("Erro ao salvar seus dados no servidor!")
        })

        return
    }

})