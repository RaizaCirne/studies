// A função saleStatus() está fazendo uma operação e a operação é enviar para a console a palavra Approved. 
function saleStatus() {
  console.log('Approved');
}

saleStatus();

// Passando parâmetro para a função - mostrar no status se ela foi aprovada ou negada 
function saleStatus(status, total) {
  console.log('Transaction ' + status + '! Total amount: $' + total);
}


// passar o status e o total que são os argumentos
saleStatus('Approved', 30);