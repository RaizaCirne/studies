// let bookTitle = 'Atomic Habits'; 
// let bookAuthor = 'James Clear';
// let bookPages = 306 

const book = {
  bookTitle: 'Atomic Habits', 
  bookAuthor: 'James Clear',
  bookPages: 306,
  bookChapters: {
    chap1: 'Fundamentals',
    chap2: '1st law'
  }, 
  // Função que mostra se o livro está sendo impresso
  printBook: function() {
    console.log('Printing...')
  }
}

// Chamando o objeto e executando a função para mostrar o 'Printing...' na tela
// função printBook está dentro da variável book 
book.printBook();

