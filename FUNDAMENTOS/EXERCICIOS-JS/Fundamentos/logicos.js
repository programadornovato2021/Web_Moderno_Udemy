// OPERADORES LOGICOS

// OBJETIVO COMPRAR TV E TOMAR SORVETE

function compras(trabalho1, trabalho2){
    const  comprarSorvete = trabalho1 || trabalho2  // || = ou
    const comprarTv50 = trabalho1 && trabalho2      // && = i
   // const omprarTv32 = !!( trabalho1^ trabalho2)  bitwise xor = exclusivo
   const comprarTv32 = trabalho1 != trabalho2 // a diferenca é mesma coisa de ser excluviso
   const manterSaudavel = !comprarSorvete // operador unário

   return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}

}

console.log(compras(true,true))
console.log(compras(true,false))
console.log(compras(false, true))
console.log(compras(false, false))