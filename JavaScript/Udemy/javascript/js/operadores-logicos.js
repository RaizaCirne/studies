// Verifica se tem idade mínima e título de eleitor para votar 
// Se puder votar, não pode viajar
// Se não puder votar, pode viajar 
let temIdadeMinima = true; 
let temTituloEleitor = true; 

let podeVotar = temIdadeMinima && temTituloEleitor;
console.log('Pode votar: ' + podeVotar);

let podeViajar = !podeVotar;
console.log('Pode viajar: ' + podeViajar);