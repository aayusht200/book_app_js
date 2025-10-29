import { library } from "./script.js";
let newLibrary = new library();

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
  if (title == "" || author == "" || pages == "") return false;
  else {
    newLibrary.addBook(title, author, pages, status);
    displayLibrary(newLibrary);
  }
  clearInput();
}

document.getElementById("add-book").addEventListener("click", (e) => {
  e.preventDefault();
  if (addBookFrom() == false) {
    alert("Invalid inputs");
    clearInput();
  }
});
document.getElementById("clear-input").addEventListener("click", (e) => {
  clearInput();
});

function createBook(newBook) {
  const book_div = document.createElement("div");
  const book_heading = document.createElement("div");
  const book_author = document.createElement("div");
  const book_pages = document.createElement("div");
  const book_status = document.createElement("div");
  const remove_button = document.createElement("button");
  const toggle_Status = document.createElement("button");

  book_div.classList.add("active");
  book_heading.classList.add("heading");
  book_author.classList.add("author");
  book_pages.classList.add("pages");
  book_status.classList.add("status");

  book_heading.textContent = newBook.title;
  book_author.textContent = newBook.author;
  book_pages.textContent = newBook.page;
  book_status.textContent = newBook.status;
  remove_button.dataset.id = newBook.id;
  remove_button.textContent = "Remove";
  toggle_Status.dataset.id = newBook.id;

  if (newBook.status == "Read") toggle_Status.textContent = "Mark as Not Read";
  else toggle_Status.textContent = "Mark as Read";

  remove_button.addEventListener("click", () => {
    newLibrary.removeBook(remove_button.dataset.id);
    displayLibrary(newLibrary);
  });

  toggle_Status.addEventListener("click", () => {
    newLibrary.toggleBookStatus(toggle_Status.dataset.id);
    displayLibrary(newLibrary);
  });

  book_div.append(
    book_heading,
    book_author,
    book_pages,
    book_status,
    remove_button,
    toggle_Status
  );
  return book_div;
}

const book_grid = document.getElementById("book-grid");

function displayLibrary(newLibrary) {
  book_grid.innerHTML = "";
  newLibrary.getBookList().forEach((element) => {
    const bookElement = createBook(element);
    book_grid.appendChild(bookElement);
  });
}
