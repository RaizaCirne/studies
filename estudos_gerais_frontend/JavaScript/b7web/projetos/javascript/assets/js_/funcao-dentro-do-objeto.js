/*

let pessoa = {
  nome: 'Bonieky',
  sobrenome: 'Lacerda',
  idade: 90
}

// Gerando nome completo 
console.log(pessoa.nome + ' ' + pessoa.sobrenome); 

*/

// Deixando o próprio objeto a cargo de gerar o nome completo 

let pessoa = {
  nome: 'Bonieky',
  sobrenome: 'Lacerda',
  idade: 90,
  nomeCompleto: function() {
    return `${this.nome} ${this.sobrenome} `;
   }
}

console.log(pessoa.nomeCompleto());

// this -> se refere ao próprio objeto/ ao próprio item / acessa o próprio objeto  

// A função nomeCompleto está retornando o nome concatenado com espaçinho e sobrenome. 

// arrow function dentro de objeto não tem acesso ao this