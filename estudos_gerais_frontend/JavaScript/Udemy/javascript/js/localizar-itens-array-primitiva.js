const num = [6, 7, 8, 9]; 

// Perguntar se o número 8 está dentro da array com método indexOf()
console.log(num.indexOf(8)); // Retorna 2 que é o index, a posição do número 8
console.log(num.indexOf(4)); // Retorna -1. Quando não existe retorna -1. 

// Método includes() é a forma mais comum para localizar intens dentro de uma array
console.log(num.includes(4)); // Retorna false
console.log(num.includes(8)); // Retorna true