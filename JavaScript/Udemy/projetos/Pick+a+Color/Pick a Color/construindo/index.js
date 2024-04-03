// Adicionando variavéis
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

// Adicionando ações
btn.addEventListener('click', function() {
  document.body.style.background = colors[4];
})