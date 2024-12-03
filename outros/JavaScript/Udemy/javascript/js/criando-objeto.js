// criar objeto e dar valores a ele

// Listando propriedades 
let bookTitle = 'Atomic Habits'; 
let bookAuthor = 'James Clear';
let bookPages = 306 

// Criando um objeto chamado book e colocando as variáveis (agrupando)

const book = {
  bookTitle: 'Atomic Habits', 
  bookAuthor: 'James Clear',
  bookPages: 306,
  bookChapters: {
    chap1: 'Fundamentals',
    chap2: '1st law'
  }
}

console.log(book); // Acessando objeto
console.log(book.bookTitle); // Acessando valor da propriedade 
console.log(book.bookChapters); // Acessando valor da propriedade 
console.log(book.bookChapters.chap1); 
console.log(book.bookChapters.chap2); 





