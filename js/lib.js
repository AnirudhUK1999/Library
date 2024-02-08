const myLibrary = [];

function Book(title,author,numberOfPages) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
}

const dia = document.querySelector('dialog');

function addBookToLibrary() {
  const title = dia.querySelector('.title-input').value
  const author = document.querySelector('.author-input').value
  const numberOfPages = document.querySelector('.pages-input').value
  let book = new Book(title,author,numberOfPages);
  myLibrary.push(book);
  displayBooks(book);
  console.log(myLibrary)
}

const shelfParent = document.querySelector('.books-container')

function displayBooks(book){
  const bookContainer = document.createElement('div')
  bookContainer.classList.add('book-container')
  
  const shelfTitle = document.createElement('div')
  shelfTitle.classList.add('title')
  const shelfAuthor = document.createElement('div')
  shelfAuthor.classList.add('author')
  const shelfPages = document.createElement('div')
  shelfPages.classList.add('pages')
  
  shelfTitle.textContent = 'Title: '+book.title + '\n'
  shelfAuthor.textContent = 'Author: ' +book.author + '\n'
  shelfPages.textContent = 'Pages: '+book.numberOfPages

  bookContainer.appendChild(shelfTitle);
  bookContainer.appendChild(shelfAuthor);
  bookContainer.appendChild(shelfPages);

  shelfParent.appendChild(bookContainer)
  
  for(b of myLibrary){
      console.log(b);
    }
}

const addBook = document.querySelector('.add-book');

const showDialogue = addBook.addEventListener('click', openDialog)


const add = document.querySelector('.add').addEventListener('click',addBookToLibrary)

const close = document.querySelector('.close').addEventListener('click', closeDialog)


function closeDialog(){
    // const dia = document.querySelector('dialog');
    dia.open = false
}

function openDialog(){
    // const dia = document.querySelector('dialog');
    dia.open = true
}