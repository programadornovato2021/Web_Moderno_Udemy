//Testando hoisting, declarações de variáveis e funções são fisicamente movidas para o topo do seu código alocadas na propria memoria

console.log('a =', a)
var a = 2
console.log('a =', a)




function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
console.log('a = ', a) 