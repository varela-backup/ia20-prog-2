class X {
    static _stc = 900
    public pub = 100
    private _priv = 200
    protected _pro = 300

    get stc() {
        return X._stc
    }
}

class Y extends X {
    get pro() {
        // return this._priv
        return this._pro
    }
}

// STATIC
const objX1 = new X()
const objX2 = new X()

X._stc = 999
console.log(X._stc)
console.log(objX1.stc)
console.log(objX2.stc)


// PUBLIC
// const objX1 = new X()
// const objX2 = new X()

// objX2.pub = 900
// console.log(objX1.pub)
// console.log(objX2.pub)


// PRIVATE vs PROTECTES
// const objY1 = new Y()
// const objY2 = new Y()

// console.log(objY1._pro)
// console.log(objY2.pro)