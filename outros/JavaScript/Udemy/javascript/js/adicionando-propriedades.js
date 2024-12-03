function createBook(title, author, pages) {
  const book = {
    bookTitle: title, 
    bookAuthor: author,
    bookPages: pages,  
    printBook: function() {
      console.log('Printing...')
    }
  }
  return book;
}

const book1 = createBook('Atomic Habits', 'James Clear', 306);
const book2 = createBook('Think', 'Napolean', 450);

// Adicionado propriedade ao book 1
// Essa propriedade pode ser adicionada depois que o objeto foi criado, porque ele é dinâmico, não é estático. 
book1.color = 'white'; 

console.log(book1); // A cor foi adicionada dentro do book 1
console.log(book2); // book2 não tem cor 