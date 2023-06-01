const Book = require('../model/bookModel');
const mongoose = require('mongoose');

//get all books
const getAllBooks = async (req, res) => {
  const books = await Book.find({}).sort({ createdAt: -1 });
  res.status(200).json(books);
};

//get a specific book
const getSpecificBook = async (req, res) => {
  const { id } = req.params;
  const book = await Book.findById(id);

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Book not found' });
  }

  if (!book) {
    res.status(404).json({ error: 'Book not found' });
  }

  res.status(200).json(book);
};

//add new book
const addNewBook = async (req, res) => {
  const { bookId, bookName, author } = req.body;

  try {
    const book = await Book.create({ bookId, bookName, author });
    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//delete book
const deleteBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const book = await Book.findOneAndDelete({ _id: id });

  if (!book) {
    return res.status(400).Book({ error: 'Book not found' });
  }

  res.status(200).json(book);
};

//update book
const updateBook = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Book not found' });
  }

  const book = await Book.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!book) {
    return res.status(400).Book({ error: 'Book not found' });
  }

  res.status(200).json(book);
};

module.exports = {
  addNewBook,
  getAllBooks,
  getSpecificBook,
  deleteBook,
  updateBook,
};
