import books from "./book.js";
import library from "./library.js";
let book1 = new books("Asad","Mansuri","2003","LoveStories","100","9568475623")
console.log(book1);
let library1=new library('01')
console.log(library1)
library1.addbook(book1);
console.log(library1)


form.addEventListener("submit",addbook);

function addbook(event){
    event.preventDefault();
    console.log(event)
    ;
    let bookTitle = event.target[0].value;
    let bookAuthor = event.target[0].value;
     let publishYear = event.target[0].value;
    let quantity = event.target[0].value;
    let genre = event.target[0].value;
    let isbn = event.target[0].value;

    let book1 =new bk(
        bookTitle,
        bookAuthor,
        isbn,
        publishYear,
        genre,
        quantity,
    );

    console.log = addbook(book1);
}
