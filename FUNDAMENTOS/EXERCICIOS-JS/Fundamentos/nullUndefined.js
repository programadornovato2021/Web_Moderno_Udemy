let valor // não inicializada
console.log(valor)

valor = null
console.log|(valor)  // ausencia de valor
//console.log(valor.toString()) ERRO! 

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined  // evite atribuir undefined
// delete console.log(!!produto.preco)
console.log(produto)

produto.preco = null //sem preço
console.log(!!produto.preco)
console.log(produto)