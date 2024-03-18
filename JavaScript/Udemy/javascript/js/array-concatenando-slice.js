// Slice -> Pegar uma parte específica da array e criar uma nova array
// Criar uma nova array com os itens (8, 'a')
let numbers = [5, 6, 7, 8];
let letters = ['a', 'b', 'c'];

// Colocando letters dentro de numbers 
all = numbers.concat(letters);

// Pegar array completa e dentro do slice passar início e o fim
half = all.slice(3, 5);
console.log(all);
console.log(half);

// Lidando com várias arrays 
// Colocando arrays como sendo uma só 
// Depois tirar porções da array criando uma outra array com outra variável 