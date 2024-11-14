let personagem = {
  nome: 'Bonieky', 
  idade: 90, 
  // Array com 2 itens
  // Dentro de cada item, tenho 2 propriedades
  carros: [
    {modelo: 'Fiat', cor: 'preto'}, 
    {modelo: 'Ferrari', cor: 'vermelho'}
  ]
}

// Acessando a cor do primeiro carro
console.log(personagem.carros[0].cor)

// Acessando modelo do segundo carro
console.log(personagem.carros[1].modelo);
