//@ts-ignore
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { Pessoa } from "./Entidades/Pessoa"

const rl = readline.createInterface({ input, output })

async function main() {
    const nome = await rl.question("qual é o seu nome? ")
    const dataNasc = await rl.question("qual é a sua data de nascimento? ")
    const pessoa = new Pessoa(nome, new Date(dataNasc))
    pessoa.store()
    process.exit()
}

main()