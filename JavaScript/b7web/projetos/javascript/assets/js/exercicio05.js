// 1. Faça um loop que mostre todas as frutas 
let frutas = ["Maçã", "Uva", "Banana"];

// 3 formas usando o for 
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// OU

for (let i in frutas) {
  console.log(frutas[i]);
}

// OU

for (let fruta of frutas) {
  console.log(fruta);
}


// 2. Conte de 1 até 100 através de um WHILE 
let n = 0; 
while(n <= 100) {
  console.log(n);
  n++; 
}