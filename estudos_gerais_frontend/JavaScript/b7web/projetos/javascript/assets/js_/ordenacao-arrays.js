// let fruits = ["Maçã", "Uva", "Laranja", "Banana"]; 

// Array em ordem alfabética
// fruits.sort(); 


// Array em ordem alfabética decrescente 
// Combinar as duas funções
// fruits.sort(); 
// fruits.reverse(); // inverte
// console.log(fruits);

// Array - Lista de objetos com 2 propriedades
let cars = [
  {brand: 'Fiat', yar: 2022},
  {brand: 'Bmw', yar: 2018},
  {brand: 'Ferrari', yar: 2020}
]

// Ordenar lista baseado no ano do carro
// Como ordenar um array baseado em uma propriedade dentro do próprio item do array? 

// cars.sort((a,b) => {
//   if(a.yar > b.yar){
//     return 1;
//   } else if (a.yar < b.yar) {
//     return - 1
//   } else {
//     return 0;
//   }
// });

// simplificando 
cars.sort((a,b) => {
  return a.yar - b.yar;
});

console.log(cars);
