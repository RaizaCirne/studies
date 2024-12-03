//Filtrar e retornar os valores de acordo com uma condição de uma array
// Quais valores são positivos? 

const tempLondon = [18, -13, 8, 2, 1]; //range de temperatura

//filter() retorna valores de acordo com o critério que você quer filtrar

/*
const tempPositive = tempLondon.filter(function(value){
  return value >= 0
});
*/

// arrow function
const tempPositive = tempLondon.filter(value => value >= 0);

console.log(tempPositive);


