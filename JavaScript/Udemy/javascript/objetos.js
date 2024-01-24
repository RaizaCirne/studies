/*
let itemName = 'Pen'; 
let itemPrice = 3; 
let itemAvailable = true; 
let itemColor = 'Red';

// verificando tipo da variável 
console.log(typeof itemAvailable);
*/

// Objeto: 
let pen = {
  itemName: 'Pen', 
  itemPrice: 3, 
  itemAvailable: true, 
  itemColor: 'Red'
}; 

// puxar propriedade e alterar seu valor
pen.itemColor = 'blue';

// mostrar objeto na tela 
console.log(pen);

// Mostrar apenas o nome na tela 
console.log(pen.itemName);



