const express = require('express');

const router = express.Router();

//get all books
router.get('/', (req, res) => {
  res.json({ message: 'Get ALl Books' });
});

//get a specific book
router.get('/:id', (req, res) => {
  res.json({ message: 'book with this id' });
});

//add new book
router.post('/', (req, res) => {
  res.json({ message: 'add new book' });
});

//delete book
router.delete('/:id', (req, res) => {
  res.json({ message: 'delete book' });
});

//update book
router.patch('/:id', (req, res) => {
  res.json({ message: 'update book' });
});

module.exports = router;
