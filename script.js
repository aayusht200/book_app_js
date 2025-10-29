class book {
  constructor(title, author, page, status) {
    this.title = title;
    this.author = author;
    this.page = Number(page);
    this.status = status;
    this.id = crypto.randomUUID();
  }
  toggleStatus() {
    this.status = this.status === "Read" ? "Not Read" : "Read";
  }
  test() {
    console.log("hello");
  }
}

export class library {
  constructor() {
    this.book_list = [];
  }
  addBook(title, author, page, status) {
    const newBook = new book(title, author, page, status);
    // console.log(newBook);
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
