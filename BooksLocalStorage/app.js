const form = document.querySelector('form');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookISBN = document.querySelector('#ISBN');
const tasksList = document.querySelector('.collection');
const delTasksBtn = document.querySelector('#del-tasks');

form.addEventListener('submit', addBook);
tasksList.addEventListener('click', deleteTask);
delTasksBtn.addEventListener('click', deleteTasks);
document.addEventListener('DOMContentLoaded', getBooks);

function getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    //console.log(books);
    for(let i = 0; i < books.length; i++){
        let book = books[i];

        //console.log(book);
        const li = document.createElement('tr');
        let text;
        for(let j = 0; j < book.length; j++){

            li.classname = "collection-item";

            text = `<td>${book[0]}</td><td>${book[1]}</td><td>${book[2]}</td>`;
        }

        li.innerHTML += text;
        //console.log(books);

        td = document.createElement('td');

        const link = document.createElement('a');

        link.setAttribute('href', '#');

        link.className = 'secondary-content';

        link.appendChild(document.createTextNode('X'));

        td.appendChild(link);

        const ul = document.querySelector('.collection');

        li.appendChild(td);

        ul.appendChild(li);



    }
}

function deleteTasks(e)
{
    while(tasksList.firstChild)
    {
        tasksList.removeChild(tasksList.firstChild)
    }
    if(localStorage.getItem('books')===null)
    {
        let books = [];
        localStorage.setItem('books', JSON.stringify(books));
    }
    localStorage.removeItem('books');
}

function deleteTask(e)
{
    if (e.target.textContent == 'X')
    {
        if (confirm("do you want to delete this task ?")) {
            let Xtarget = e.target.parentElement;
            Xtarget.parentElement.remove();
            let bookitem = Xtarget.parentElement.firstChild.textContent;
            //console.log(bookitem);
            deleteBook(bookitem);
        }
    }
}

function deleteBook(bookitem)
{
    let books;
    let ISBNValue = bookISBN.value;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }

    books.forEach(function (book, index){
        console.log(bookitem);
        if(book[0] === bookitem){
            books.splice(index, 1);
        }
    });

    localStorage.setItem('books', JSON.stringify(books));
}

function addBook(e)
{
    const bookAuthorVal = bookAuthor.value;
    const bookTitleVal = bookTitle.value;
    const bookISBNVal = bookISBN.value;

    const li = document.createElement('tr');

    li.classname = "collection-item";

    li.innerHTML += `<td>${bookAuthorVal}</td><td>${bookTitleVal}</td><td>${bookISBNVal}</td>`;

    e.preventDefault();

    const link = document.createElement('a');

    link.setAttribute( 'href', '#');

    link.className = 'secondary-content';

    link.appendChild(document.createTextNode('X'));

    li.appendChild(link);

    const ul = document.querySelector('.collection');

    ul.appendChild(li);


    const book = [bookAuthorVal, bookTitleVal, bookISBNVal]

    BookToLocalStorage(book);

    //taskInput.value = '';
    bookAuthor.value = '';
    bookTitle.value = '';
    bookISBN.value = '';

    e.preventDefault();

}



function BookToLocalStorage(book){
    let books;
    if(localStorage.getItem('books') === null){
        books = [];
    } else {
        books = JSON.parse(localStorage.getItem('books'));
    }
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
}