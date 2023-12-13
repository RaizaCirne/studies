function sobrenome(sob){
  return 'Bonieky ' + sob;
}

// Arrow Funcion - Simplificação de uso da função 
const sobrenome = sob => 'Bonieky ' + sob; 

const sobrenome = (sob) => 'Bonieky ' + sob; 

const sobrenome = (sob) => {
  return 'Bonieky ' + sob;
}

const sobrenome = (sob) => {
  let nomeCompleto = 'Bonieky ' + sob; 
  return nomeCompleto;
}

console.log(sobrenome('Lacerda'));