
# Library App

## Overview
The Library App is a web application for managing a personal collection of books. Users can **add**, **display**, **update**, and **remove** books. Each book has a unique ID for reliable management.

---

## Features
- Add a book with **Title**, **Author**, **Pages**, and **Read Status**  
- Display all books in a responsive **grid layout**  
- Remove a book  
- Toggle a book's read status (**Read / Not Read**)  
- Clear input fields easily  
- Works on desktop, tablet, and mobile screens  

---

## Technologies
- **HTML5** – Structure  
- **CSS3** – Styling and responsive design  
- **JavaScript** – Logic, DOM manipulation, event handling  

---

## Setup
1. **Clone the repo:**
```bash
git clone <your-repo-url>
```

2. **Navigate to project folder:**
```bash
cd <project-folder>
```

3. **Open `index.html` in a browser** – no server required.

---

## How It Works
- **Book Constructor:** Each book is created with a unique ID and properties for title, author, pages, and read status.  
- **Add Book:** Inputs create a new book object in the `book_list` array and refresh the UI.  
- **Display Library:** Loops through `book_list` and creates a card for each book.  
- **Remove / Toggle Status:** Buttons update the array and re-render the library.

---

## File Structure
```
Library-App/
├─ index.html
├─ style.css
├─ index.js
└─ README.md
```

---

## Future Enhancements
- Save library in **localStorage**  
- Add stricter **form validation**  
- Enhance styling with **animations**  
- Sorting and filtering books  

---

## License
Open-source, free for educational use.
