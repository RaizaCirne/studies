function clicou() {
  const teste = document.querySelector("#teste");
  console.log(teste.children);
  console.log(teste.children[0].children);
  console.log(teste.children[1].children);

  // teste.children -> retorna os filhos imediatos, ou seja, mostra o elemento que tem dentro de teste. 

  // teste.children[0].children -> Entrou dentro de ul (primeiro filho) e pegou os filhos de ul 

  // teste.children[1].children -> Verificando o segundo filho do id teste. Retorna vazio, pois não tem elementos dentro dele. 
}

