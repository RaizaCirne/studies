function myFunction(a, order = "asc") {
  return
}

console.log(myFunction([2, 3, 1], "asc")); // [ 1, 2, 3]
console.log(myFunction([6, 2, 8, 1, 5], "desc")); // [ 8, 6, 5, 2, 1]
console.log(myFunction(["uva", "maçã", "laranja"], "asc")); // [ 'laranja', 'maçã', 'uva' ]
console.log(myFunction(["t", "a", "s", "z", "m"])); // [ 'a', 'm', 's', 't', 'z' ]