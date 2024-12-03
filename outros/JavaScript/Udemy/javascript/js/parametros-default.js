// Cálculo de financiamento de um veículo
// Quanto vou pagar no final de x anos?

// argumentos: 
// loan -> valor que vou pegar emprestado 
// rate -> quantos porcento ao ano vou pagar pelo dinheiro que peguei emprestado 
// years -> a quantidade de anos 

function carLoan(loan, rate, years) {
  return (loan  * rate / 100 * years) + loan;
}; 

console.log(carLoan(20000, 2.5, 5));
// Peguei 20 mil e paguei no fum de 5 anos 22mil e 500. 

