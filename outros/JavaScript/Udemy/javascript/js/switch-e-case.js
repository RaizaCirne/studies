// Programa aonde coloco a sigla e ele me retorna o nome do aeroporto
let airport = 'SEA'; 

// 1º - Verifica a variável - que é a airport 
// 2º - Coloca as chaves
// 3º - Dentro do switch coloca os case
switch (airport) {
  case 'MCO' :
    console.log('Orlando');
    break;
  case 'JFK' :
    console.log('John F. Kennedy');
    break;
  case 'SEA' :
    console.log('Seattle'); 
    break;
  default: 
    console.log('Unknowun');
}