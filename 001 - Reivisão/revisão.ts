let cont = 0

class Especie {
    protected _nome: string
    private _codigo: number
    
    constructor (nome: string) {
        this._nome = nome
        this._codigo = cont++
    }

    get nome() {
        return this._nome
    }

    get codigo() {
        return this._codigo
    }
}

abstract class Animal {
    protected  _nome!: string
    protected _especie!: Especie 

    get nome() {
        return this._nome
    }

    get especie() {
        return this._especie
    }
}

class Gato extends Animal {
    private static especie = new Especie("felis catus")

    constructor(nome: string) {
        super()
        this._nome = nome
        this._especie = Gato.especie 
        // this._especie = new Especie("felis catus") 
    }
}

class Cachorro extends Animal {
    private static especie = new Especie("canis lupus familiaris")

    constructor(nome: string) {
        super()
        this._nome = nome
        this._especie = Cachorro.especie 
    }
}

const nanquin = new Gato("Nanquin")
const ciencia = new Gato("Ciencia")
const puppi = new Cachorro("Puppi")

console.log(nanquin.nome, nanquin.especie.codigo, nanquin.especie.nome)
console.log(ciencia.nome, ciencia.especie.codigo, ciencia.especie.nome)
console.log(puppi.nome, puppi.especie.codigo, puppi.especie.nome)