// Criando array com objetos dentro
let cores = [
  {nome: "preto", qt: 10},
  {nome: "azul", qt: 5},
  {nome: "vermelho", qt: 15}
]; 

// Acessando objeto com arrays dentro do loop 

/*
for (let n = 0; n < cores.length; n++) {
  console.log(cores[n].qt);
  console.log(cores[n].nome);
}
*/

/*
for (let i in cores) {
  console.log(cores[i].nome);
}
*/

/*
for (let i in cores) {
  console.log(cores[i].nome);
}
*/

/*
for (let cor of cores) {
  console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}
*/

// Colocando todas as cores com nome maiúsculo 
for (let i in cores) {
  cores[i].nome = cores[i].nome.toUpperCase(); 
}

console.log(cores);

// Podemos usar loop para: 
// Alterar informações 
// Acessar informações 
// etc
