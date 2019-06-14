
// $(document).on('click', "#googlemapIcon", function(initMap){
// var config = {
//   apiKey: "AIzaSyCxC0EKmN7JN1t0osgs-C2Q2sdWhnZI83M",
//   databaseURL: "https://assignmenttracker-test.firebaseio.com/"
// };

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCxC0EKmN7JN1t0osgs-C2Q2sdWhnZI83M",
  authDomain: "assignmenttracker-test.firebaseapp.com",
  databaseURL: "https://assignmenttracker-test.firebaseio.com",
  projectId: "assignmenttracker-test",
  storageBucket: "assignmenttracker-test.appspot.com",
  messagingSenderId: "626442309702",
  appId: "1:626442309702:web:e2fe8f2e7084aa91"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

console.log(database);

database.ref().on(
  "value",
  function(snapshot) {
    console.log("values", snapshot.val());
  },
  function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  }
);


$("#submitAssignmentLog").on("click", function() {
  var assignmentId = $('#assignmentId_input').val.trim();
  var taskId = $('#taskId_input').val.trim();
  var developerId = $('#developerId_input').val.trim();
  var priority = $('#priority_input').val.trim();
  var taskName = $('#taskName_input').val.trim();
  var description = $('#description_input').val.trim();

  var assignmentLogInfo = {
    formAssignmentId : assignmentId,
    formTaskId : taskId,
    formDeveloperId : developerId,
    formPriority : priority,
    formTaskName : taskName,
    formDescription :description
  };
  database.ref().push(assignmentLogInfo);
  console.log(assignmentLogInfo.formAssignmentId);
  console.log(assignmentLogInfo.formDescription);
  console.log(assignmentLogInfo.formPriority);
  console.log(assignmentLogInfo.formTaskId);
  console.log(assignmentLogInfo.formTaskName);

   $('#assignmentId_input').val("");
   $('#taskId_input').val("");
   $('#developerId_input').val("");
   $('#priority_input').val("");
   $('#taskName_input').val("");
   $('#description_input').val("");
});






$("#googlemapIcon").click(function() {
  alert("The paragraph was clicked.");
});

$("#googlemapIcon").on("click", function() {
  $("#map").show();
});

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}


  



  
//Notebook function
class Book {
 constructor(title, author, isbn) {
   this.title = title;
   this.author = author;
   this.isbn = isbn;
 }
// UI Class: Handle UI Tasks
class UI {
 static displayBooks() {
   const books = Store.getBooks();

   books.forEach((book) => UI.addBookToList(book));
 }

 static addBookToList(book) {
   const list = document.querySelector('#book-list');

   const row = document.createElement('tr');

   row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
   `;

   list.appendChild(row);
 }

 static deleteBook(el) {
   if(el.classList.contains('delete')) {
     el.parentElement.parentElement.remove();
   }
 }

 static showAlert(message, className) {
   const div = document.createElement('div');
   div.className = `alert alert-${className}`;
   div.appendChild(document.createTextNode(message));
   const container = document.querySelector('.container');
   const form = document.querySelector('#book-form');
   container.insertBefore(div, form);

   // Vanish in 3 seconds
   setTimeout(() => document.querySelector('.alert').remove(), 3000);
 }

 static clearFields() {
   document.querySelector('#title').value = '';
   document.querySelector('#author').value = '';
   document.querySelector('#isbn').value = '';
 }
}
// Store Class: Handles Storage
class Store {
 static getBooks() {
   let books;
   if(localStorage.getItem('books') === null) {
     books = [];
   } else {
     books = JSON.parse(localStorage.getItem('books'));
   }

   return books;
 }

 static addBook(book) {
   const books = Store.getBooks();
   books.push(book);
   localStorage.setItem('books', JSON.stringify(books));
 }

 static removeBook(isbn) {
   const books = Store.getBooks();

   books.forEach((book, index) => {
     if(book.isbn === isbn) {
       books.splice(index, 1);
     }
   });

   localStorage.setItem('books', JSON.stringify(books));
 }
}

// Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
 // Prevent actual submit
 e.preventDefault();

 // Get form values
 const title = document.querySelector('#title').value;
 const author = document.querySelector('#author').value;
 const isbn = document.querySelector('#isbn').value;

 // Validate
 if(title === '' || author === '' || isbn === '') {
   UI.showAlert('Please fill in all fields', 'danger');
 } else {
   // Instatiate book
   const book = new Book(title, author, isbn);

   // Add Book to UI
   UI.addBookToList(book);

   // Add book to store
   Store.addBook(book);

   // Show success message
   UI.showAlert('Note Added', 'success');

   // Clear fields
   UI.clearFields();
 }
});

// Event: Remove a Book
document.querySelector('#book-list').addEventListener('click', (e) => {
 // Remove book from UI
 UI.deleteBook(e.target);

 // Remove book from store
 Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

 // Show success message
 UI.showAlert('Note Removed', 'success');
});










