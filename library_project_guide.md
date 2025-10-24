# Library Project - Steps and Checklist

## Project Overview
You are building a library app where users can add, display, update, and remove books. All books are stored in an array, with each book having a unique ID. The UI should allow interaction via buttons and forms.

---

## Steps

### 1. Set Up Project
- Initialize a Git repository.
- Create skeleton files: `index.html`, `style.css`, `script.js`.
- Link CSS and JS in HTML.

---

### 2. Create Book Constructor
- Define a constructor function for books with the following properties:
  - Title
  - Author
  - Number of pages
  - Read status (read/not read)
  - Unique ID
- Add a method to toggle the read status of a book.

---

### 3. Store Books in an Array
- Create an empty array to hold book objects.
- Write a function that takes input values, creates a new book, and adds it to the array.

---

### 4. Display Books on Page
- Write a function that loops through the book array and displays each book in the UI.
- Use cards or a table to display each book.
- Include information like title, author, pages, and read status.
- Add buttons for "Remove" and "Toggle Read" actions.
- Use a unique identifier to link the DOM elements with the book objects.

---

### 5. Add New Book Form
- Create a form that allows users to input book details.
- Include a button to open the form.
- Prevent the default form submission behavior.
- On submission, create a new book, add it to the array, and refresh the display.

---

### 6. Remove Book Functionality
- Each book display should have a "Remove" button.
- Clicking the button should remove the book from the array and update the display.
- Use unique identifiers to match DOM elements with book objects.

---

### 7. Toggle Read Status
- Each book display should have a "Toggle Read" button.
- Clicking the button should switch the read status of the corresponding book.
- Update the display accordingly.

---

### 8. Optional Enhancements
- Style the book cards for better readability.
- Use a modal or sidebar for the "New Book" form.
- Validate input fields to prevent empty submissions.
- Store the library in local storage to persist data across page reloads.

---

## Checklist

- Git repository initialized
- HTML/CSS/JS skeleton files created
- Book constructor defined with unique ID
- Method to toggle read status added
- Book array created
- Function to add new book to array implemented
- Display function shows all books on page
- "New Book" form created and functional
- Form submission prevented from default reload
- Remove button removes book from array and UI
- Toggle Read button updates book status and UI
- DOM elements properly linked to book objects
- Optional: Styling and localStorage implemented