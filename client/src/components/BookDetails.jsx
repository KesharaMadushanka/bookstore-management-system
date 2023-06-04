import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';

const BookDetails = ({ book }) => {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await fetch('/api/book');
      const json = await response.json();

      if (response.ok) {
        setBooks(json);
      }
    };

    fetchBooks();
  }, []);

  return (
    //     <div className="book-details">
    //       <h3>{book.bookName}</h3>
    //       <p>
    //         <strong>Book ID : </strong>
    //         {book.bookId}
    //       </p>
    //       <p>
    //         <strong>Author : </strong>
    //         {book.author}
    //       </p>
    //       <p>
    //         <strong>Created At : </strong>
    //         {book.createdAt}
    //       </p>
    //     </div>
    //   );
    // };

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Book ID</TableCell>
            <TableCell>Book Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>Created At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books &&
            books.map((book) => (
              <TableRow
                key={book._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {book.bookId}
                </TableCell>
                <TableCell>{book.bookName}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell>{book.createdAt}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BookDetails;
