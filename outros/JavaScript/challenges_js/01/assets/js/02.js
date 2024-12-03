function myFunction(a) {
  return typeof(a);
} 

console.log(myFunction(1));
console.log(myFunction(false));
console.log(myFunction({}));
console.log(myFunction("Hello world"));
console.log(myFunction(["Hello world"]));