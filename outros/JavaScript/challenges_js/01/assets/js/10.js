function myFunction(a, order = "asc") {
  for(let i = 1; i < a.length; i++) {
    for (let j = 0; j < i; j++) {
      if(a[j] > a[i]) {
        const temp = a[i];
        a[i] = a[j];
        a[j] = temp;
      }
    }
  }
  if(order === "desc") {
    const inverted = []
    for (let i = a.length - 1; i >= 0; i--) {
      inverted.push(a[i]);
    }
    return inverted;
  }
  return a;
}

console.log(myFunction([2, 3, 1], "asc")); // [ 1, 2, 3]
console.log(myFunction([6, 2, 8, 1, 5], "desc")); // [ 8, 6, 5, 2, 1]
console.log(myFunction(["uva", "maçã", "laranja"], "asc")); // [ 'laranja', 'maçã', 'uva' ]
console.log(myFunction(["t", "a", "s", "z", "m"])); // [ 'a', 'm', 's', 't', 'z' ]