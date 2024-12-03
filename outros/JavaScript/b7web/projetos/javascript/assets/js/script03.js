/*
function clicou() {
  const teste = document.querySelector('#teste'); 
  const ul = teste.querySelector('ul');

  // adicionar texto novo a um elemento
  //append: adicionar um conteúdo ao conteúdo que já tem dentro desse elemento
  ul.children[0].append("(alterado)")
}
*/


/*
function clicou() {
  const teste = document.querySelector('#teste'); 
  const ul = teste.querySelector('ul');

  // adicionar texto novo a um elemento
  ul.children[0].innerHTML += "(alterado)";
}

// inner - pega todo o conteúdo e substitui 
// append - pega o conteúdo e adiciona ( só funciona para texto)
*/

function clicou() {
  const teste = document.querySelector('#teste'); 
  const ul = teste.querySelector('ul');

  // ul.innerHTML += "<li>Item adicionado</li>";

  
  // adicionar elemento - FORMA CORRETA
  let newLi = document.createElement("li");
  newLi.innerText = "Item adicionado";

  // append - adiciona ao final 
  // ul.appendChild(newLi);

  // prepend - adiciona no começo 
  ul.prepend(newLi);
}