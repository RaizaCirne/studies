function myFunction (a,b) {
  return
}

console.log(myFunction([1, 2, 3], 2)); // [1, 3]
console.log(myFunction([1, 2, "3"], "3")); // [1, 2]
console.log(myFunction(["1", false, 2, "3"], false)); // ['1', '2', '3']
console.log(myFunction([5, 1, 2, 5, 3, 5], 5)); // [1, 2, 3]



