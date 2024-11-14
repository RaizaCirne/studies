/*

function clicou() {
  // 1º Selecionar o próprio elemento
  // const input = document.querySelector('input');

  // 2º Verifica se realmente pegou o input com o console.log
  // console.log(input);

  // 3 ºComo pegamos atributos/propriedades de um elemento? Pegando o placeholder
  // console.log(input.getAttribute('placeholder'));

  // 4º Função para saber se existe esse atributo -> Esse input tem placeholder? 
 // hasAttribute retorna um boolean - true or false
 
 if(input.hasAttribute('placeholder')) {
    console.log('Tem placeholder SIM'); 
  } else {
    console.log('Não tem placeholder...')
  }


  // 5º Colocar ou alterar um atributo 
  // 2 PARÂMETRPS: 1) qual atributo quero trocar, 2) valor que quero colocar nele
  // input.setAttribute('placeholder', 'Placeholder alterado'); 

  // 6º Botão mostrar senha 
  // Trocou o type de passowrd para text, isso faz mostrar a senha 
  // input.setAttribute('type', 'text')
}*/

// RECURSO PARA MOSTRAR E OCULTAR SENHA 
// Ao clicar ele vira texto para password 
// Ao clicar novamente no botão ele passa de text para password novamente
function clicou() {
  const input = document.querySelector('input'); 
  // trocando texto do botão 
  const botao = document.querySelector('.botao');
  if (input.getAttribute('type') === 'text') {
    input.setAttribute('type', 'password'); 
    // quando trocar para password vou pegar o botão e mudar para value 
    botao.innerText = "Mostrar Senha";
  } else {
    input.setAttribute('type', 'text');
    botao.innerText = "Ocultar Senha";
  }
}

// Resumo: 

// hasAttribute - Usamos para SABER SE TEM ou não um atributo
// getAttribute - Usamos para PEGAR um atributo
// setAttribute - Usamos para trocar ou colocar o atributo