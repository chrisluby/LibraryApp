"use strict";
let libr = new Array;
libr += new Book('Harry Potter', 132, "J.K Bowling Ball", false);
let addButton = document.querySelector('.button button')
let form = document.querySelector('.form-style-8')
let closeBtn = document.querySelector('.close')
let userFormInput = document.querySelector("form");


addButton.addEventListener('click', function(){
  if (form.style.display = "none") {form.style.display = "block"};
  addButton.style.display = "none";
    
})

closeBtn.addEventListener('click', function(){
  form.style.display = "none"
  addButton.style.display = "block";
})

// form.addEventListener('submit', function(){
  
  
//   e.preventDefault
//   const name = document.forms['form'].value;
//   console.log(name)
// })

function get(){
  var name = document.getElementById("name").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("check-one").checked;
  document.querySelector("form").reset();

  myLibrary += new Book(name, author, pages, read);
  
  console.log(name, author, pages, read);

}



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




 

//sets up page HTML
function render() {

}


libr.forEach(function(element) {
  console.log(element);
});




