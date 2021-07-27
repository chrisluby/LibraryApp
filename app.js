"use strict";
const myLibrary = [];
let index = 0;
let addButton = document.querySelector('.button button')
let form = document.querySelector('.form-style-8')
let closeBtn = document.querySelector('.close')
let userFormInput = document.querySelector("form");

let ul = document.querySelector(".inner");


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
  this.read = read ? "Yes" : "No";
  this.index = index;
  index++;
  this.bang = function() {
    if (this.read === "Yes"){
      return this.read = "No"
    } else if (this.read === "No") {
      return this.read = "Yes"
    }
  }
};

//sets up the page HTML
function render() {
  myLibrary.forEach(function(e, i){
  var li = document.createElement("li");
  li.classList.add("row");
  
  ul.appendChild(li);

  var div = document.createElement("div");
  li.appendChild(div)
  div.classList.add("innercols")
   
  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = e.title
  
  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = e.author
  
  var p = document.createElement("p");
  div.appendChild(p);
  p.innerText = e.pages
  
  var p = document.createElement("p"); 
  p.classList.add('read');
  p.classList.add(i); //adds to index of the added book to the innercols div as a class.  beginning at 0.
  div.appendChild(p);
  p.innerText = e.read

  readClicks();
  })
}

function get(){
  var name = document.getElementById("name").value;
  var author = document.getElementById("author").value;
  var pages = document.getElementById("pages").value;
  var read = document.getElementById("check-one").checked;
  document.querySelector("form").reset();

  var addBook = new Book(name, author, pages, read);
  myLibrary.push(addBook)
  clear();
  render();
}

let clear = function() {
  let rowNodes = document.querySelectorAll('.row');
  rowNodes.forEach(function(e){
    e.remove();
  })
}

function readClicks(){
  let z = document.querySelectorAll('.read')
  
  z.forEach(function(ele, i){
    ele.addEventListener("click", script)
  })
}

function script(){
  myLibrary[this.classList[1]].bang();
  clear();
  render();
}

