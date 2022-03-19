// const bts = document.querySelectorAll("main div")

// for (let i=0 ; i < bts.length; i ++) {
//     const bt = bts[i]
//     bt.onclick = function() {
//         bt.classList.add("animating")
//     }
// }

// bts.forEach(bt => {
//     bt.addEventListener("click", el => { 
//         bt.classList.add("animating")
//     })
// })

const divMain = document.querySelector("main")
const divs = divMain.querySelectorAll("div")

let rnd = Math.round(Math.random() * 3)
divs[rnd].classList.add("animating")

divMain.addEventListener("click", ev => ev.target.classList.toggle("animating"))