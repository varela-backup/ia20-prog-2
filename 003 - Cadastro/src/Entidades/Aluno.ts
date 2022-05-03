import { Pessoa, IDadosPessoa } from "./AbstractPessoa";

interface IDadosAluno {
    matricula: string
}

export class Aluno extends Pessoa {
    protected _dados: IDadosPessoa & IDadosAluno;

    constructor(dadosDeAlunos: IDadosPessoa & IDadosAluno) {
        super(dadosDeAlunos)
        // ERRO NA HORA DE SALVAR - DESAFIO
        this._dados = { ...dadosDeAlunos }
    }
}