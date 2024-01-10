function myFunction(a,b) {
  return a === b; 
}

console.log(myFunction(2,3)); // retorna false
console.log(myFunction(3, 3)); // retorna true
console.log(myFunction(1, "1")); // retorna false
console.log(myFunction("10", "10")); // retorna true
