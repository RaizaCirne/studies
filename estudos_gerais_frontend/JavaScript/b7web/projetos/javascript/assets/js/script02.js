/*
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul'); // pegando ul dentro de #teste
  
  console.log(ul);
}
*/


// Mostrando conteúdo que tem dentro do ul 
/*
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul'); 
  
  console.log(ul.innerHTML);
}
*/


// Alterando conteúdo dentro do ul
/*
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul'); 
  
  ul.innerText = "<li>Item alterado</li>";
}
*/


// Adicionando conteúdo novo 
/*function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul'); 
  
  ul.innerText += "<li>Item alterado</li>";
}

//OU 

function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul'); 
  
  ul.innerText = ul.innerHTML + "<li>Item alterado</li>";
}
*/

// Alterando primeiro elemento do ul
// inner = interno 
// out = fora
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul'); 
  
  ul.children[0].innerHTML = "Item <strong>alterado</strong>";  // Altera primeiro elemento da ul - intertpreta como HTML 
  ul.children[0].innerText = "Item <strong>alterado</strong>"; // Altera primeiro elemento da ul - interpreta como texto
  console.log(ul.outerHTML); // conteúdo de dentro incluindo o elemento que estou seleccionando
  ul.outerHTML = "<strong>Alterado!</strong>" // Pega todo o elemento e troca. ul não existe mais. 
}
