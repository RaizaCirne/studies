
// Usando objeto Math.random para gerar um número aleatório 
// Math.floor arredonda pra um número inteiro 
// multiplica por 6 para gerar 6 números aleatórios 
// Para gerar 6 números aleatórios, multiplicar por 6. Mas o objeto math.rendom sempre inicializa no zero, então geraria numeros aleatórios entre 0 e 5. Para resolver isso, somar + 1. 

// 1º) Variável sorteio vai receber um número entre 1 e 6 
let sorteio = Math.floor(Math.random() * 6 + 1);

// 2º) Associar o número sorteado com a imagem correspondente a face do dado usando a estrutura switch case 

switch(sorteio) {
  case 1: 
    document.getElementById('face').src="face1.png";
    break;
  case 2: 
    document.getElementById('face').src="face2.png";
    break;
  case 3: 
   document.getElementById('face').src="face3.png";
    break;
  case 4: 
    document.getElementById('face').src="face4.png";
    break;
  case 5: 
    document.getElementById('face').src="face5.png";
    break;
  case 6: 
    document.getElementById('face').src="face6.png";
    default:
      // caso contrário
        break;
}


