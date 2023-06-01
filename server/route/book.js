const express = require('express');
const {
  addNewBook,
  getAllBooks,
  getSpecificBook,
  deleteBook,
  updateBook,
} = require('../controller/bookController');

const router = express.Router();

//get all books
router.get('/', getAllBooks);

//get a specific book
router.get('/:id', getSpecificBook);

//add new book
router.post('/', addNewBook);

//delete book
router.delete('/:id', deleteBook);

//update book
router.patch('/:id', updateBook);

module.exports = router;
