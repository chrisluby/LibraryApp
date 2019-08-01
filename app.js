"use strict";
let myLibrary = [];
let addButton = document.querySelector('.button button')
let form = document.querySelector('.form-style-8')
let closeBtn = document.querySelector('.close')


addButton.addEventListener('click', function(){
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {form.style.display = "none";}
})

closeBtn.addEventListener('click', function(){
  form.style.display = "none"
})


function Book(title, pages, author, read) {
  this.title = title;
  this.pages =  pages;
  this.author = author;
  this.read = read;
  this.info = function() {
    let a = `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'have read!~' : 'not read' }`
    return a
  }
  this.toggleRead = function() {
    this.read = !this.read //toggles read boolean
  }
};

    //* temp book
const book1 = new Book('Harry Potter', 132, "J.K Bowling Ball", false);

function addBookToLibrary() {
  // do stuff here
}

//sets up page HTML
function render() {

}





