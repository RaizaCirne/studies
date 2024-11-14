// 3) Faxina 
// Uma função que receba um objeto (de atributo, nome, sobrenome, idade) e delete algum deles, caso esteja vazio (null). 

const myCleaning = (object) => {
  if(object.name === null) {
    delete object.name; 
  } else if(object.surname === null) {
    delete object.surnamename; 
  } else if(object.age === null) {
    delete object.age; 
  } else {
    console.log('Nada a deletar!');
  }; 
  console.log(object);
};

myCleaning({name: null , surname: 'Araujo', age: 23});