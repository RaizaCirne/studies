//5) Moldura 
// Uma função que recebe dois números (a e b) e cria uma moldura com essas dimensões. a e b tem que ser maiores do que 1. 

const frame = (row) => {
  var line = '+'; 
  if(row >0 && column > 0) {
    for (var i = 0; i < row; i++) {
      line = line + '-';
    }
    line = line + '+';
    console.log(line);

    for (var i = 0; i < column; i++) {
      console.log('-');
    }
    console.log(line);
  }
  
};

frame(5);