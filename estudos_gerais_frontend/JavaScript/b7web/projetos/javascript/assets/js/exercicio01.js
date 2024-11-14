/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Dórumula da porcentagem: ( y / x) * 100 
Uso da função: 

let x = 40; 
let y = 10; 
let pct = calcPct(x,y)
console.log(`${pct} de ${x} é ${y}`)
*/ 


function calcPct (x, y) {
  return (y / x) * 100; 
}

let x = 50; 
let y = 20; 
let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`)