// OBS: Os argumentos que não mudam, por exemplo, a taxa e a quantidade de anos, posso colocar um valor default neles 

function carLoan(loan, rate = 2.5, years = 5) {
  return (loan  * rate / 100 * years) + loan;
}; 

console.log(carLoan(20000));

// Essa é a forma para associar valores defalt dentro dos argumentos, dentro das suas funções. 