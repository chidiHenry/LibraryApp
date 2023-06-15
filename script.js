const formTitle = document.getElementById('title');
const formAuthor = document.getElementById('author');
const formPages = document.getElementById('pages');
const formread = document.getElementById('read');
const formSubmit = document.getElementById('myForm');




function formInput(){
    

}

formSubmit.onsubmit = function(e){
formInput()

  e.preventDefault()
}




let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title ;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
 

}

function addBookToLibrary(book){
    return myLibrary.push(book);
}