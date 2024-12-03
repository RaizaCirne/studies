// Argumentos: (a,b) -> É o valor que deve ser executado/está sendo executado juntamente com a função
function price(a, b) {
  return a + b;
};

console.log(price(10,20));


console.log(price(10)); // Se esquecer um argumento -> retorna NaN 
console.log(price(10, 20, 30, 40)); // Se passar mais argumentos -> Só considera os dois primeiros que foram passados para a função
