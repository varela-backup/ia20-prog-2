import { Entidade, IObjetoGenerico } from "./AbstractEntidade"

export interface IDadosPessoa {
    nome: string,
    dataNasc: Date,
}

export abstract class Pessoa extends Entidade {
    protected _dados: IObjetoGenerico & IDadosPessoa

    constructor(dadosDePessoa: IDadosPessoa) {
        super()
        // ERRO NA HORA DE SALVAR - DESAFIO
        this._dados = { ...dadosDePessoa }
    }
}