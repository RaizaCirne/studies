// Função com retorno condicional 

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}

// let verificacao = maiorDeIdade(70);
// console.log(verificacao);

// OU 

let idade = 65; 
let verificacao = maiorDeIdade(idade);

if (verificacao) {
  console.log('É maior de idade');
} else {
  console.log('É menor de idade');
}

// OBS: Uma função só pode ter um retorno. 
// Ai tem dois porque tá dentro de uma condicional