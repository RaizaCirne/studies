function myFunction(a) {
  if (a.length < 3) {
    return []; 
  } else {
    return a.slice(0,3);
  }
}

console.log(1, 2, 3, 4, 5); // [4, 5]
console.log(5, 4, 3, 2, 1, 0); // [2, 1, 0]
console.log(18, 20, 30); // [ ]
console.log(99, 100); // [ ]


