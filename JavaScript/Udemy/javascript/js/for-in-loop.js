// Analisando dentro de um objeto 
// Criando variável e passando 3 valores para a variável 

const myCar = {
  model: 'BMW', 
  year: 2023,
  km: 68000
}

// Mostrar no console a propriedade (model, year e km) e o valor da propriedade ('BMW', '2023' e 68000)
// Passar também os valores que tem em model, year e km. 


for ( let i in myCar) {
  console.log(i, myCar[i]); // passa o myCar dentro do i
}


