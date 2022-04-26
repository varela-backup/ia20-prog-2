import { Entidade } from "./AbstractEntidade"

export class Pessoa extends Entidade {
    // SIAPE
    // MATRÍCULA
    constructor(nome: string, dataNasc: Date) {
        super()
        this._dados.nome = nome
        this._dados.dataNasc = dataNasc 
    }
}