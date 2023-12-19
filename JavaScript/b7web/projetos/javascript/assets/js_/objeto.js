// Criando objeto dentro de um objeto
let personagem = {
  nome: 'Bonieky', 
  idade: 90, 
  pais: 'Brasil',
  olhos: ['preto', 'azul'],
  caracteristicas: {
    forca: 20, 
    magia: 5,
    stamina: 15
  }
}

// Exibindo objeto
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);

// Acessando a quantidade de magia 
console.log(personagem.caracteristicas.magia);

// Acessando a cor do olho azul 
console.log(personagem.olhos[1])