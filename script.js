class book {
  constructor(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = Number(page);
    this.status = status;
    this.id = crypto.randomUUID();
  }
  toggleStatus() {
    this.status = this.status === "READ" ? "NOT READ" : "READ";
  }
}

class library {
  constructor() {
    this.book_list = [];
  }
  addBook(title, author, page, status) {
    const newBook = new book(title, author, page, status);
    this.book_list.push(newBook);
  }
  removeBook(id) {
    this.book_list = this.book_list.filter((e) => e.id !== id);
  }
  toggleBookStatus(id) {
    this.findBook(id).toggleStatus();
  }
  findBook(id) {
    return this.book_list.find((e) => e.id === id);
  }
  getBookList() {
    return this.book_list;
  }
}

let currentLibrary = new library();
currentLibrary.addBook("One Piece", "Eiichiro Oda", 25, "Not Read");
currentLibrary.addBook("Naruto", "Masashi Kishimoto", 28, "Not Read");

console.log(JSON.parse(JSON.stringify(currentLibrary.getBookList())));
currentLibrary.toggleBookStatus(currentLibrary.getBookList()[0].id);
console.log(JSON.parse(JSON.stringify(currentLibrary.getBookList())));
