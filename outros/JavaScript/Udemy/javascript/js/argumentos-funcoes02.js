function price() {
  let total = 0; 
  for (let value of arguments)
    total += value;
  return total;
};

console.log(price(10, 20, 40, 50));

// arguments está pegando os argumentos ( ) -> não precisa definir a quantidade de argumentos em cima, pois já será definido embaixo
// value vai ser o a 
// depois que rodar de novo vai ser o b, depois c, depois d e assim por diante  
// embaixo o arguments vai rodar no 10, 30, 40 e assim por diante

//Utilizando o objeto arguments não precisa passar a quantidade de argumento específica de forma estática, pode deixar ele dinâmico. 