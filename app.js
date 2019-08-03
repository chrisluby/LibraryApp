"use strict";
const myLibrary = [];
let index = 0;
let addButton = document.querySelector('.button button')
let form = document.querySelector('.form-style-8')
let closeBtn = document.querySelector('.close')
let userFormInput = document.querySelector("form");
let ul = document.querySelector("ul");


//* temp books
myLibrary.push(new Book('Harry Potter', 132, "J.K Bowling Ball", false));
myLibrary.push(new Book('Circe', 387, "Adelaine Miller", true));
myLibrary.push(new Book('Spooky Book ', 11, "Scary Guy", false));
//* ---------------------------------------------------------------------


addButton.addEventListener('click', function(){
  if (form.style.display = "none") {form.style.display = "block"};
  addButton.style.display = "none";
    
})

closeBtn.addEventListener('click', function(){
  form.style.display = "none"
  addButton.style.display = "block";
})

function Book(title, pages, author, read) {
  this.title = title;
  this.pages =  pages;
  this.author = author;
  if (this.read = true) {
    this.read = "Yes"
  } else {this.read = "No"}
  this.index = index;
  index++;
  this.bangRead = function() {
    this.read = !this.read
  }
};

function get(){
  var name = document.getElementById("name").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("check-one").checked;
  document.querySelector("form").reset();

  var addBook = new Book(name, author, pages, read);
  myLibrary.push(addBook)
  
  
  console.log(name, author, pages, read);
}

// console.log(myLibrary)

myLibrary.forEach(function(e, i){
  console.log(e.title)
  console.log(i)
  
})

//sets up page HTML
function render() {
  var li = document.createElement("li");
  li.classList.add("row");
  ul.appendChild(li);
  var div = document.createElement("div");
  li.appendChild(div)
  div.classList.add("innercols")

  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = myLibrary[1].title

  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = myLibrary[1].author

  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = myLibrary[1].pages

  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = myLibrary[1].read

}
render()


