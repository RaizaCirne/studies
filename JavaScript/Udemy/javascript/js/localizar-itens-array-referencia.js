// Intens de referência: Onde passo mais de uma informação dentro de uma array

// Lista de filmes
const movies = [
  {id:1, movieName: 'Dejavu'},
  {id:2, movieName: 'Back to the Future'},
  {id:3, movieName: 'The Matrix'}
]; 

// console.log(movies);

// Procurar por algum movie 
// Dentro da array as informações estão armazenadas como referência, são múltiplos valores. Teremos que usar tática diferente sem ser o includes() para conseguir encontrar alguma coisa. 

console.log(movies.find(function(movie) {
  return movie.movieName === 'The Matrix';
}))
// find() -> só funciona com uma função dentro dele
// Criar uma função para procurar alguma coisa dentro do array e retornar o valor da procura para o método find() 

// No caso do includes() não conseguimos procurar valores dentro da array quando se trata de várias entradas/várias keys. Temos que usar o find() que só é utilizado com uma função. 

// 1º Criamos a função que chama pela variável movie 
// 2º Pedimos para retornor movie.movieName se for igual ao que eu escrever.

// Ele retorna, o retorno vai para a função find() e a função find() coloca no console.log()
// Vai do return para o find(), do find() para o console.log() e do console.log() para a saída na tela. 

// OBS: 
// SE É UMA ARRAY TIPO OBJETO COM VÁRIAS REFERÊNCIAS, UMA ARRAY DE REFERÊNCIA, UTILIZAR O FIND(). 
// SE FOR UMA ARRAY PRIMITIVA, NÃO PRECISA USAR O FIND(). 