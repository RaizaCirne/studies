// Switch - condicional em que temos múltiplos resultados

let profession = "atleta"; 

console.log(`Profissão: ${profession}`);

switch(profession) {
  case 'fiscal': 
    console.log("Sua camisa será VERDE")

  break;
  case 'bombeiro':
    console.log("Sua camisa será VEMELHA")

  break; 
  case 'policial': 
  console.log("Sua camisa será AZUL")

  break; 
  default: 
  console.log("Sua camisa será PRETA");
  break;
}