function myFunction(num) {
  if(num % 2 === 0) {
    return true
  } else {
    return false;
  }
}

console.log(myFunction(8)); // true
console.log(myFunction(-10)); // true
console.log(myFunction(7)); // false
console.log(myFunction(-41)); // false


