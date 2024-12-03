// Itens depois do elemento e antes do elemento 

/*
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  // ul.after("Texto qualquer")
  ul.before("Texto qualquer");
}
*/

// Adicionando elemento 
// Ao clicar no botão, adiciona o novo botão antes do elemento ul

/*
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  const newButton = document.createElement('button');  // criando botão 
  newButton.innerHTML = "Botão"; // conteúdo do botão

  ul.before(newButton);
}
*/

// Adicionando nova lista
function clicou() {
  const teste = document.querySelector('#teste');
  const ul = teste.querySelector('ul');

  // 1 - criamos elemento ul
  let newUl = document.createElement('ul'); 
  // 2 - Demos um loop 
  for (let i = 0; i < 5; i++) {
    let newLi = document.createElement('li');
    newLi.innerHTML = "Item add " + (i + 1);
    // 3 - Adicionamos os li dentro do ul
    newUl.append(newLi);
  }

  //4 - jogamos ul na tela - isso pode ser antes ou depois
  ul.after(newUl);
}