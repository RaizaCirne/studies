// function myFunction (a,b) {
//   const filtred = []
//   for (const item of a) {
//     if (item !== b) {
//       filtred.push(item)
//     }
//   }
//   return filtred
// }

// Simplificando - utilizando o filter do array
function myFunction (a,b) {
  return a.filter(item => item !== b);
}


console.log(myFunction([1, 2, 3], 2)); // [1, 3]
console.log(myFunction([1, 2, "3"], "3")); // [1, 2]
console.log(myFunction(["1", false, 2, "3"], false)); // ['1', '2', '3']
console.log(myFunction([5, 1, 2, 5, 3, 5], 5)); // [1, 2, 3]