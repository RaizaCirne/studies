// Usar uma função que soma a raiz quadrada de dois númer
function addSquares(a, b) {
  // raiz quadrada de um número
  const square = (x) =>  x * x;

   return square(a) + square(b);
}

console.log(addSquares(2,3));