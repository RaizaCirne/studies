// 2) Porcemtagem 
// Uma função que recebe dois números (a e b). Deve retornar quantos % de b é de a. 

function percentage (nominator, denominator ) {
  var result = nominator / denominator; 
  console.log(nominator + ' equivale a ' + result * 100 + '% de ' + denominator);
}

percentage(40,50);