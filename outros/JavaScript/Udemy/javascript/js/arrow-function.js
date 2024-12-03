const movies = [
  {id:1, movieName: 'Dejavu'},
  {id:2, movieName: 'Back to the Future'},
  {id:3, movieName: 'The Matrix'}
]; 

/*

console.log(movies.find(function(movie) {
  return movie.movieName === 'The Matrix';
}))

*/


// O mesmo resultado com uma sitnaxe mais simples -> Arrow Function 
console.log(movies.find(movie => movie.movieName === 'The Matrix'));