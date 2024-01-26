// Programa aonde você vai ter a opção de escolher ou não a cor do carro
// Selecionar a cor que o cliente quer, mas caso ele não defina a cor. Selecionar a cor que está no estoque. 
let corCliente = undefined;
let corEstoque = 'Black'; 
let corVendida = corCliente || corEstoque; 
console.log(corVendida);