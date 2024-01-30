var etanol, gasolina; 

function calcular() {
   // pegar o valor que está na caixa de texto txtEtanol que está dentro do formuçário frmFlex.
  etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
  gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));
  // comparação 
  // se o valor do etanol custar até 70% o valor da gasolina
  if(etanol < 0.7 * gasolina ) {
    document.getElementById("status").src="images/etanol.png";
  } else {
    document.getElementById("status").src="images/gasolina.png";
  }
}

function resetar() {
  document.getElementById("status").src="images/neutro.png"
}