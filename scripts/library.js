import books from "./book.js";
class library{
    constructor(libraryname,){
    this.libraryName = libraryname;
    this.booklist = []
}
// books is object in thge parameter @params=>books(objects)
addbook(bk){
    //instance is basiclly used for object is present or not if it is present then it is true
if(!(bk instanceof books)){
    return 0
}
this.booklist.push(bk)
}
}
export default library