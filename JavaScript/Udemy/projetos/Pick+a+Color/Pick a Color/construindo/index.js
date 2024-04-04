// Adicionando variavéis
const colors = ['Red', 'Black', 'Blue', 'Yellow', 'Purple', 'Green']
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

// Adicionando ações
btn.addEventListener('click', function() {
  const randomColor = getRandomColor()
  document.body.style.background = colors[randomColor]
  color.textContent = colors[randomColor]
  // console.log(randomColor)
})

function getRandomColor () {
  return Math.floor(Math.random() * colors.length)
}