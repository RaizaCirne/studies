// Criando uma função que vai criar objetos - é o sistema de factory
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

console.log(book1);
console.log(book2);




