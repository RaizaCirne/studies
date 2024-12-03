// Fazendo loop que pega as cores e exibe no console 
// Adicionando um item ao array 

let cores = ["preto", "branco", "azul", "vermelho"]; 
cores.push("verde"); 

/* 
for (let n = 0; n < cores.length; n++) {
  console.log(cores[n]);
}
*/

// Outra forma mais simples de fazer isso: Usando chave para acessar o item -> i vai ser a chave do array e pegar o 0,1,2 etc
/* 
for (let i in cores) {
  console.log(cores[i]);
}
*/

// Outra forma mais simples de fazer isso: usando o valor para acessar o item 
// let cor of cores -> quero a cor de cores. Está se referindo ao valor. 
// cor vai ser um objeto
for (let cor of cores) {
  console.log(cor);
}
