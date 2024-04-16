
let computerNumber
let userNumbers = []

function init() {
   computerNumber = Math.floor(Math.random() * 100 + 1)
   console.log(computerNumber)
}

function compareNumbers() {
   const userNumber = Number(document.getElementById('inputBox').value)
   userNumbers.push(' ' + userNumber)
   document.getElementById('guesses').innerHTML = userNumbers

   if(userNumber > computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Your number is too high'
      document.getElementById('inputBox').value = ''
   } else if (userNumber < computerNumber) {
      document.getElementById('textOutput').innerHTML = 'Your number is too low'
      document.getElementById('inputBox').value = ''
   } else {
       document.getElementById('textOutput').innerHTML = 'Congratulations!!!'
   }
}