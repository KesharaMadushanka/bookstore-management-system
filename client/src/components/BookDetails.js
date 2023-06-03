const BookDetails = ({ book }) => {
  return (
    <div className="book-details">
      <h3>{book.bookName}</h3>
      <p>
        <strong>Book ID : </strong>
        {book.bookId}
      </p>
      <p>
        <strong>Author : </strong>
        {book.author}
      </p>
      <p>
        <strong>Created At : </strong>
        {book.createdAt}
      </p>
    </div>
  );
};

export default BookDetails;
