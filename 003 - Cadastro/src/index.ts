//@ts-ignore
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { Aluno } from './Entidades/Aluno' // adicionar

const rl = readline.createInterface({ input, output })

async function main() {
    const nome = await rl.question("qual é o seu nome? ")
    const dataNasc = await rl.question("qual é a sua data de nascimento? ")
    const matricula = await rl.question("qual é o seu número de matrícula? ")
    const aluno = new Aluno({ nome, matricula, dataNasc: new Date(dataNasc) })
    aluno.store()
    process.exit()
}

main()