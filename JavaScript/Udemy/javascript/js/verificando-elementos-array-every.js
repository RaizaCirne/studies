// Testando elementos dentro de uma array e colocando uma condição 
// verificar se as temperaturas são positivas
const tempLondon = [18, 13, 8, -4]; //range de temperatura

//every() -> verifica todos os valores da array 
const tempPositive = tempLondon.every(function(value){
  return value >= 0
});

console.log(tempPositive);

// Explicação: 
// 1. Ele foi na variável tempLondon onde existe uma array
// com every() verificou cada número da array 
// Depois de verificar cada número, chamou a função 
// Na função se o valor que estiver na array for >= 0 retorna verdadeiro
// Se houver algum valor negativo, retorna false 

// Se você precisar verificar algum elemento de acordo com uma comparação/checagem que precise fazer. Ex: verificar se um item dentro da array é maior ou menor que zero. Para verificar todos os itens sem precisar criar um for loop, pode usar o método every()

// Coloca a variável.every() e depois a função