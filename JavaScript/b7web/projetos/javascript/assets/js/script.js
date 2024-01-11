function clicou() {
  console.log("Clicou no botão");
}

// Selecionamos o botão 
// Colocou um escutador para quando houver evento de click, executar a função clicou()
let botao = document.querySelector(".botao");
botao.addEventListener("click", () => {
  clicou();
});


