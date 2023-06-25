let newForm = document.querySelector('#form');
let formInputs = document.querySelectorAll('.inputs');


let newBookButton = document.querySelector('#bookButton');
newBookButton.addEventListener('click', function(){
    
    newForm.style.display = 'block';
    clearInput();
    
})


let myLibrary = [];


class Book{
    constructor(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
    }
    toggleRead(){
        this.read =!this.read;
    }
}

function toggleRead(i){
    myLibrary[i].toggleRead();
    render();
}
function remove(index){
    myLibrary.splice(index, 1);
    render();
}
function render(){
    
    let libraryEl = document.querySelector('#library');
    libraryEl.innerHTML = "";
    for(let i =0; i<myLibrary.length; i++){
        // console.log(myLibrary[i]);
        let book = myLibrary[i]
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `
        <div id="card">
        <p><h4>${book.title}</h4></p>
        <p>By: ${book.author}</p>
        <p>${book.pages} Pages</p>
        <p>${book.read ? "Read": "Not Read"}</p>
        <div id="toggle"><button onclick="toggleRead(${i})">Toggle Read</button></div>
        <div id= "Remove-btn"><button onclick="remove(${i})">Remove</button></div>
         </div>
        `
        ;
       libraryEl.appendChild(bookEl);


    }
}


function addBookToLibrary(){
let title = document.querySelector('#title').value;
let author = document.querySelector('#author').value;
let pages = document.querySelector('#pages').value;
let read = document.querySelector('#read').checked;
let newBook = new Book(title, author, pages, read);
 myLibrary.push(newBook);
 render();

//  console.log(myLibrary);
 
}

function clearInput(){
   for(inputs of formInputs){
    inputs.value = "";
   }
}


newForm.onsubmit = function(e){
    e.preventDefault();
    addBookToLibrary();

    newForm.style.display = 'none';

    
    
    


}