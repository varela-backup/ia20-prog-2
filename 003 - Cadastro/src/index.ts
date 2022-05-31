import express from "express"
import cors from "cors"
import { Aluno } from "./Entidades/Aluno"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (request, response) => {
    response.send("Hello World")
})

app.get("/teste", (req, res) => {
    res.send("OIE")
})

app.post("/aluno", (req, res) => {
    if (req.body.nome.toLowerCase().trim() == "gabriel monteiro") {
        res.statusCode = 451
        res.json({ error: true, msg: "..." })
        return
    }

    const aluno = new Aluno({
        nome: req.body.nome,
        dataNasc: new Date(req.body.dataNasc),
        matricula: req.body.matricula
    })
    aluno.store()
    res.statusCode = 200
    res.json({ error: false })
})

app.listen(4000, () => {
    console.log(`⚡ server is running`)
})