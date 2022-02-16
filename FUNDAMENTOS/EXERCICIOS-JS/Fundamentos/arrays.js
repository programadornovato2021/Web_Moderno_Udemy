const valores = [7.7, 7.9, 6.3, 9.2, 8.5]
console.log(valores[0], valores[3])
console.log(valores[4])
console.log(valores[5])

valores [5] = 10
console.log(valores)
console.log(valores.length) // quantos elementos tem na array length

valores.push({id: 3}, false , null, 'teste')
console.log(valores)

console.log(valores.pop())  //vai pegar o ultimo valor do array , e vai retirar o ultimo elemento
delete valores[0]
console.log(valores)

console.log(typeof valores)