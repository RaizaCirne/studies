// add dois valores ao array
// Adicionar e reorganizar informações dentro de uma array. Isso não serve apenas para números, serve também para strings. 

const num = [7, 8, 9]; 

num.push(10,11,12); // push() -> adiciona no final da array
num.unshift(1,2,3); // unshift() -> adiciona no início da array
num.splice(3, 0, 4, 5, 6); // splice() -> passar 3 informações: 1º - index de início; 2º - Quantos quero deletar de agora pra frente; 3º - O que vai ser adicionado.

console.log(num);