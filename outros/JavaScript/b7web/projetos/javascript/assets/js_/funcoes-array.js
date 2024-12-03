let fruits = ["Maçã", "Uva", "Laranja", "Banana"]; 

// Adiciona item ao array
// fruits.push("Kiwi"); 

// Remove o último item do array 
// fruits.pop(fruits);

// Remove o primeiro item do array 
// fruits.shift(fruits);

// Retorna uma string - join não altera o array, ele pega o array e gera o resultado. Gera uma string baseada no seu array com o separador que você definir
// console.log(fruits.join(', '));

// Alterando valores específicos do array - Substituindo o índice 0 por esse valor/string
// fruits[0] = "Pera"

// Alterando o último item do array sem saber qual é o último item
// fruits[fruits.length - 1] = "Pera"

//ou

//Outra abordagem: Remover o último e adicionar o primeiro 
fruits.pop();
fruits.push("Pêra");

console.log(fruits);
// console.log(fruits.length);