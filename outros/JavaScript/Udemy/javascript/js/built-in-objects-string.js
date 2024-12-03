// string -> é utilizado para manipular caracteres
let message = 'Hey, my name is Andre';

// Verifica se a mensagem inicia com 'Hey' 
console.log(message.startsWith('Hey')); // true
console.log(message.startsWith('Heyq')); // false
console.log(message.startsWith('hey')); // false 

// Verifica quantos caracteres tem em message 
console.log(message.length); // 21

// Existe 'is' na message? 
console.log(message.includes('is')); // true
console.log(message.includes('por')); // false
console.log(message.includes('Andre')); // true
console.log(message.includes('andre')); // false

// Verifica o final da mensagem 
console.log(message.endsWith('andre')); // false
console.log(message.endsWith('re')); // true



// Utilizar quando tiver a necessidade de analisar uma mensagem ou analisar literalmente uma string











