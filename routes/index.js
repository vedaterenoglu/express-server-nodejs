/*
 index.js by Vedat Erenoglu
 */
//we import the express from our node modules and set our router to being the Router method on our imported express class

import express from 'express';
let router = express.Router();

// We also import the Book class and create several instances of it inside of our ‘/books’ and return them as json.

import Book from '../models/book.model';

/* GET home page. We create some data for the home page */

router.get('/', (req, res, next) => {
   let bookTypes = [
    {
      bookType: 'Print'
    },
    {
      bookType: "e-Book"
    },
    {
      bookType: "Audiobook"
    }
];
res.json(bookTypes);
});

router.get('/books', (req, res, next ) => {
let books = [
new Book('A Tale of Two Cities','Charles Dickens','e-Book'),
new Book('The Lord of the Rings','J.R.R. Tolkien','Audiobook'),
new Book('Don Quixote','Miguel de Cervantes','Print'),
new Book('The Dream of the Red Chamber','Cao Xueqin','e-Book'),
new Book('The Lion, the Witch and the Wardrobe', 'C.S. Lewis', 'Audiobook'),
new Book('The Da Vinci Code','Dan Brown','Audiobook'),
new Book('The Alchemist','Paulo Coelho','Print'),
new Book('The Alchemist-2','Paulo Coelho','Print'),
];
res.json(books);
});

// For the post method we also pull in the parameters from the body and return a book object back out as json

router.post('/book/create', (req, res) => {
   let book = new Book(
     req.body.bookName,
     req.body.author,
     req.body.bookType);
   res.json(book);
})

export default router;