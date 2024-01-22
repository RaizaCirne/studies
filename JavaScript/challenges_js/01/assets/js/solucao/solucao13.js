/* 
function myFunction(a, b) {
  return a === b ? [a] : [a].concat(myFunction(a + 1, b));
}
*/

// OU 

/*
function myFunction(a, b) {
  return Array(b - a + 1)
  .fill(a)
  .map((prev, next) => prev + next); 
}
*/

// Implementação do Prof

function myFunction(a, b) {
  return Array.from({length: b - a + 1 }, (_, key) => key + a);
}


console.log(myFunction(1, 5)); // [1, 2, 3, 4, 5]
console.log(myFunction(11, 18)); // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(myFunction(-5, 5)); // [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]