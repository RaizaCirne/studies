
// Criando uma variável de escopo global
// Essa variável pode ser usada dentro de qualquer função, já que foi criada fora da função
// O que foi criado fora, pode usar dentro da função
let count = 0;

// Função para incrementar
function add() {
  count++; 
}

add();
add();

console.log(count);

// Ao criar variável dentro da função, não dá pra acessá-la fora
// Ao criar variável fora da função, mas usar dentro da função, funciona