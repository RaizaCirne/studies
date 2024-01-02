// Escreva uma função que recebe 6 parâmetros (a,b,c,d,e,f);
// Faça a soma de a com b.
// O resultado da soma, subtraia o valor de c. 
// O resultado da subtração, multiplique por d e faça a divisão por e. 
// E para finalizar, faça o resultado elevado à potência de f. 

function myFunction (a,b,c,d,e,f) {
  // const soma = a + b; 
  // const subtracao = soma - c; 
  // const mutiplicacaoDivisao = subtracao * d / e;
  // const resultado = mutiplicacaoDivisao ** f; 
  // return resultado 
  return (((a + b)) - c * d / e) ** f; 
}

console.log(myFunction(6,5,4,3,2,1)); // 10.5
console.log(myFunction(6,2,1,4,2,3)); // 2744
console.log(myFunction(2,3,6,4,2,3)); // - 8 

