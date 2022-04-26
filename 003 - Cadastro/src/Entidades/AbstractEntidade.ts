import * as fs from 'node:fs'

type TObjetoGenerico = { [key: string]: any }

export abstract class Entidade {
    protected _dados: TObjetoGenerico = {}

    constructor() { }
    
    load() { }
    
    store() {
        const dadosString = JSON.stringify(this._dados)
        // @todo: mudar para assincrono
        fs.writeFileSync("teste.json", dadosString)
    }
    
    delete() { }
}