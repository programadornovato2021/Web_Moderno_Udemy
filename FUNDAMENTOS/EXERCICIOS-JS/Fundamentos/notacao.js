// NOTAÇÃO PONTO

console.log(Math.ceil(6.1))

const objt1 = {}
objt1.nome = 'Bola'
console.log(objt1.nome)

function Obj(nome) {
    this.nome = nome //instanciando a funcao , receber o valor nome e ficar visivel, publico
        console.log('Exec')
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
