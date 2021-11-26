// project objects
const ui = new UI()
const ls = new LS()

// event elements
const form = document.querySelector('#book-form');
const booksList = document.querySelector('#book-list');

// events
form.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', getBooks);

function getBooks(){
    const books = ls.getData('books')
    books.forEach(function (book){
        ui.addBook(book)
    })
}

function addBook(event){
// get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    // create book by Book class
    const book = new Book(title, author, isbn)
    // add book by ui object addBook method
    ui.addBook(book)
    // add book by ls object addBook method
    ls.addBook(book)

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    event.preventDefault();
}