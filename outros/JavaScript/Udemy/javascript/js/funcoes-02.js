// 2 Tipos de funções
//Function Declaration -> onde vou declarar o nome dessa função 

function movie() {
  console.log('The Matrix');
};

movie();

// Function Expression -> É uma função de expressão, sem nome. 
// Como ela está sem nome, a forma de indentificá-la é associando ela a uma variável

// Não damos nome a função pois ela é uma expression e pq ela está associada a uma variável
const car = function() {
  console.log('Tesla');
}; 

// Chamar a variável
car();

// Utilizamos dois tipos de escrever a função, mas funcionam da mesma forma. 

// OBS: Pode fazer com que a variável seja associada a 2 pontos, por exemplo: 
// Duas variáveis estão associadas a mesma função
const truck = car;

truck();