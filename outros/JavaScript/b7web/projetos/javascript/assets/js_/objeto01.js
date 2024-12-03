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

// Trocando nome do personagem - Alteração de propriedade
personagem.nome = 'Pedro'; 
console.log(personagem.nome);


// Adicionando 5 a característica força 
personagem.caracteristicas.forca += 5; 
console.log(`Força: ${personagem.caracteristicas.forca}`);

// Adicionando cor ao olho
personagem.olhos.push('verde');
console.log(personagem.olhos);


