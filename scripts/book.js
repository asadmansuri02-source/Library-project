class books{
    constructor( author,publishedby, publishedyear, tittle, quantity, ISBL){
        this.author = author;
        this.publishedby = publishedby;
        this.publishedyear = publishedyear;
        this.tittle = tittle;
        this.borrow = 0;
        this.quantity = quantity || 1;
        this.ISBL = ISBL;
    }
}

export default books