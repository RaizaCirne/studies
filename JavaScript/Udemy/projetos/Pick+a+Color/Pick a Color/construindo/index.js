// Adicionando variavéis
const colors = ['Red', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')

// Adicionando ações
btn.addEventListener('click', function() {
  const randomColor = getRandomColor()
  document.body.style.background = colors[randomColor]
  document.getElementById('cor').innerHTML = colors[randomColor]
  // console.log(randomColor)
})

function getRandomColor () {
  return Math.floor(Math.random() * colors.length)
}