let books = [
    { id: 1, name: "Der alte Mann und das Meer", price: 10.5 },
    { id: 2, name: "Moby Dick", price: 12.3 },
    { id: 3, name: "1984", price: 8.5 },
  ];

  function getBookById(bookId) {
    return books.find(book => book.id === bookId) || null;
  }
  
  function addBook(name, price) {
    const newId = Math.max(...books.map(book => book.id)) + 1;
    books.push({ id: newId, name: name, price: price });
  }
  
  function listBooks() {
    books.forEach(book => {
      console.log(`${book.name} - ${book.price}€`);
    });
  }
  
  let myBook = getBookById(2);
  console.log(myBook);
  
  addBook("Fahrenheit 451", 9.2);
  listBooks();
  