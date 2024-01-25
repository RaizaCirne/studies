// 1) Uma função que recebe uma letra e uma frase. Ele deve dizer quantas vezes essa letra aparece na frase. 

function stringCounter(letter, string) {
  var cont = 0; 
  for(var i in string) {
    if(letter == string[i]) {
      cont++
    }
    console.log("Essa letra aparece um total de: " + cont + (cont === 1 ? " vez" : " vezes"));
  }

}

stringCounter("o", "Leonardo")

