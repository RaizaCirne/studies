let fruits = ["Banana", "Laranja", "Maçã", "Pêra", "Uva"]; 

// Filtrar apenas frutas que tem mais de 4 letras
// Função filter() gera um novo array  
// let bigFruits = fruits.filter((item) => {
//  return item.length > 4;
// } )


// Saber se todas as frutas tem mais de 3 letras 
fruits.every((value) => {
  if (value.length > 3) {
    return true;
  } else {
    return false; 
  }
})

// simplificando 
let ok = fruits.every((value) => {
  return value.length > 3; 
})

if (ok) {
  console.log('Todos são maior que 3')
} else {
  console.log('Não são todos maior que 3')
}

// every -> só retorna true quando todos os itens satisfazem aquela condição 

//some -> quando apenas um satisfaz a condição 


// Verificar se tem uva no array
if(fruits.includes('Uva')) {
  console.log('Tem uva sim!')
} else {
  console.log('Não tem uva...')
}