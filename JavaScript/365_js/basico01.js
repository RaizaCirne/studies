// Escreva uma função que recebe dois valores, a e b, como parâmetros. Essa função deve retornar true se os dois valores forem iguais e do mesmo tipo. Caso contrário, false. 

function myFunction(a,b) {
  if (a === b) {
    return true; 
  } else {
    return false; 
  }
}

console.log(myFunction(2,3)); // retorna false
console.log(myFunction(3, 3)); // retorna true
console.log(myFunction(1, "1")); // retorna false
console.log(myFunction("10", "10")); // retorna true


