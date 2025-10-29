class book {
  constructor(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = Number(page);
    this.status = status;
    this.id = crypto.randomUUID();
  }
  static toggleStatus() {
    this.status = this.status === "READ" ? "NOT READ" : "READ";
  }
}

class library {
  constructor() {
    const book_list = [];
  }
  addBook(title, author, page, status) {
    const newBook = new book(title, author, page, status);
    book_list.push(newBook);
  }
//   getBookList() {
//     return book_list;
//   }
}

let currentLibrary = new library();
currentLibrary.addBook("one piece", "Echira Oda", 25, "READ");
currentLibrary.addBook("one piece", "Echira Oda", 28, "NOT READ");
console.log(currentLibrary.getBookList());
