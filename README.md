# 📚 Library App

## Overview

The **Library App** is a web application for managing a personal collection of books. Users can **add**, **display**, **update**, and **remove** books — each identified by a unique ID for reliable management.

This project includes **two versions**:

1. **Function-based version** (original implementation) – located in `index.js`
2. **Modular, class-based version** – separated into `script.js` (logic) and `main.js` (UI & DOM handling)

---

## ✨ Features

- Add a book with **Title**, **Author**, **Pages**, and **Read Status**
- Display all books in a responsive **grid layout**
- Remove a book
- Toggle a book's read status (**Read / Not Read**)
- Automatically clears input fields after adding a book
- Works seamlessly across desktop, tablet, and mobile screens

---

## 🧩 Technologies

- **HTML5** – Structure
- **CSS3** – Styling and responsive design
- **JavaScript (ES6)** – Logic, classes, and DOM manipulation

---

## ⚙️ Setup

1. **Clone the repository:**

```bash
git clone <your-repo-url>
```

2. **Navigate to the project folder:**

```bash
cd <project-folder>
```

3. **Open `index.html` in your browser** – no local server required.

---

## 🧠 How It Works

### Function-Based Version (`index.js`)

- Implements core library logic using plain functions.
- Handles adding, removing, and toggling books directly within a single file.
- Ideal for understanding the fundamental flow of data and DOM updates.

### Class-Based Modular Version (`script.js` + `main.js`)

- Introduces **object-oriented design** and **modular structure**:
  - **`book` class:** Defines individual book properties and behavior.
  - **`library` class:** Manages the collection (`book_list`), including adding, removing, and updating books.
  - **`main.js`:** Handles DOM manipulation, form interaction, and rendering — separate from logic.
- Promotes **scalability**, **readability**, and **clean code architecture**.

---

## 🗂️ File Structure

```
Library-App/
├─ index.html
├─ style.css
├─ index.js            # Original function-based version
├─ script.js           # Logic (Book + Library classes)
├─ main.js             # DOM + UI handling for class-based version
└─ README.md
```

---

## 🚀 Future Enhancements

- Save and load books using **localStorage**
- Add **form validation** and user-friendly error messages
- Improve UI with **CSS transitions and animations**
- Enable **search, sorting, and filtering**
- Optionally use **ES Modules (import/export)** for cleaner integration

---

## 🪪 License

Open-source — free to use for learning and educational purposes.
