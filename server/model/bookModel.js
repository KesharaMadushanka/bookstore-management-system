const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    bookId: {
      type: String,
      required: true,
    },
    bookName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('book', bookSchema);
