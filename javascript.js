let grid = document.querySelector(".grid");
let body = document.querySelector("body");
let form = document.querySelector("#form");
const myLibrary = [];

let newTitle = document.querySelector("#newtitle");
let newAuthor = document.querySelector("#newauthor");
let newPages = document.querySelector("#newpages");
let ifUnread = document.querySelector("#unread");
        
function clear() {
    grid.textContent = '';
}

let add = document.querySelector(".add");
add.addEventListener('click', addBook);

let newButton = document.querySelector(".new");
newButton.addEventListener('click', showForm);

function showForm () {
        form.style.opacity = 1;
        newButton.removeEventListener('click', showForm);
        newButton.addEventListener('click', hideForm);
}

function hideForm () {
    form.style.opacity = 0;
    newButton.removeEventListener('click', hideForm);
    newButton.addEventListener('click', showForm);
}

function addBook() {
    console.log('AYAYA');
    let ifread = 'read';
    if (ifUnread.checked) {
        ifread = 'not read yet';
    }
    let temp = new Book(newTitle.value, newAuthor.value, newPages.value, ifread);
    if (newTitle.value != '' && newAuthor.value != '' && newPages.value != '') {
        addBookToLibrary(temp);
        add.removeEventListener('click', addBook);
        newTitle.value = '';
        newAuthor.value = '';
        newPages.value = '';
        ifUnread.checked = true;
        hideForm();
        display();
    }
}

function display() {
    clear();
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
        let button = document.createElement('button');
        button.textContent = 'DELETE';
        let secondbutton = document.createElement('button');
        secondbutton.textContent = 'READ';
        button.setAttribute('style', 'margin-bottom: -50px; margin-top: 30px;');
        div.appendChild(secondbutton);
        div.appendChild(button);
        button.addEventListener('click', () => {grid.removeChild(div);})
        secondbutton.addEventListener('click', () => {
            if (read.textContent == 'read') {
                read.textContent = 'not read yet';
            }
            else {
                read.textContent = 'read';
            }
        })
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
addBookToLibrary(new Book('AYAYA', 'J.R.R. Tolkien', 295, 'not read yet'));
addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit);
display();
