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