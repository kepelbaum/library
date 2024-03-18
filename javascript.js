let grid = document.querySelector(".grid");
const myLibrary = [];
        
function display() {
    
    myLibrary.forEach(element => {
        let div =  document.createElement('div');
        let title = document.createElement('div');
        let author = document.createElement('div');
        let pages = document.createElement('div');
        let read = document.createElement('div');
        title.textContent = `${element.title}`;
        author.textContent = `by ${element.author}`;
        pages.textContent = `${element.pages} pages`;
        read.textContent = `${element.read}`;
        div.appendChild(title);
        div.appendChild(author);
        div.appendChild(pages);
        div.appendChild(read);
        grid.appendChild(div);
    })
}
function addBookToLibrary(book) {
    myLibrary.push(book);
}
        
function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
            }
        }
        
function loopThrough() {
            
}
        
let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
addBookToLibrary(theHobbit);

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
display();
