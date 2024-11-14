// Hoisting -> Significa que o JS automaticamente move as funções para cima para serem executadas primeiro. 

// ------------------------------------------------------------

// 1) Declaration - Criamos a função e depois chamamos a função
function movie() {
  console.log('The Matrix');
};

movie();

// EXEMPLO 1:
// Se passar a função movie() para cima e a criação da função embaixo ainda funciona
movie();

function movie() {
  console.log('The Matrix');
};

// ------------------------------------------------------------

// 2) Expression - Crio a função e associo a variável e depois chamo a função
const car = function() {
  console.log('Tesla');
}; 

car();

// EXEMPLO 2: 
car();

const car = function() {
  console.log('Tesla');
}; // ERROR 

// No expression se passar o car() para cima e a criação da função para baixo, não funciona.
// Isso ocorre pois estamos tentando acessar uma variável que ainda não existe para o JavaScript, pois o JS checa de cima para baixo. 

// ------------------------------------------------------------