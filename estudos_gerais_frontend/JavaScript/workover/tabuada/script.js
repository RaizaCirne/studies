// tabuada 

// var i = 1; -> Determina o ponto de partida/início do laço 
// i < 11; -> Determina o fim do  laço 
// i++ -> É o incremento. Equivale a i = 1 + 1; 
// i contador para o número de repetições que você quer

for (var i = 1; i < 11; i++) { 
  document.write("<p> Tabuada do " + i + "</p>"); 
  for(var j = 1; j < 11; j++) {
    document.write(i + " x " + j + " = " + (i * j) + "</br>")
  }
}