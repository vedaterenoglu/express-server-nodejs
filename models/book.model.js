/*
We create a model for JSON output
*/


export default class Book {
  constructor(bookName, author, bookType){
     this.bookName = bookName;
     this.author = author;
     this.bookType = bookType;
   }

   getAuthor(){
     return this.author;
   }
   getBookName(){
     return this.bookName;
   }
}