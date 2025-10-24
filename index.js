function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
  this.id = crypto.randomUUID();
}

Book.prototype.toggleStatus = function () {
  this.status = this.status === "Read" ? "Not Read" : "Read";
};

let book_list = [];

function addToLibrary(title, author, pages, status) {
  const newBook = new Book(title, author, pages, status);
  book_list.push(newBook);
}
function clearInput() {
  document.getElementById("book-title").value = "";
  document.getElementById("book-author").value = "";
  document.getElementById("book-pages").value = "";
  document.getElementById("book-status").value = "";
}
function addBookFrom() {
  const title = document.getElementById("book-title").value;
  const author = document.getElementById("book-author").value;
  const pages = document.getElementById("book-pages").value;
  const status = document.getElementById("book-status").value || "Not Read";
  if (title == "" || author == "") return false;
  else addToLibrary(title, author, pages, status);
  clearInput();
}
document.getElementById("add-book").addEventListener("click", (e) => {
  e.preventDefault();
  if (addBookFrom() == false) {
    alert("Invalid inputs");
    clearInput();
  }
  console.log(book_list);
});
document.getElementById("clear-input").addEventListener("click", (e) => {
  clearInput();
});
const div = document.createElement("div");
div.classList.add("book_one");
const book_grid = document.getElementsByClassName("book-grid");
book_grid[0].appendChild(div);
console.log(book_grid);
