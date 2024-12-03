// Quando parte do código array precisa estar vazia, mas sem fazer uma alteração na própria array, apenas zerando em determinado ponto. 

// OBS: As vezes esse ponto pode estar dentro de uma função também 

// 3 formas para aplicar 

let num = [5, 6, 7, 8]; 

num = []; // 1ª forma -> esvaziando
num.length = 0; // 2ª forma -> dizendo que o tamahho da array é igual a 0 
num.splice(0, num.length); // 3ª forma -> remova do index 0, até o tamanho total da array

console.log(num);

// Dessa forma zeramos a array, o que chamamos de empty.