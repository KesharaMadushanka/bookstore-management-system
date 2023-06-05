import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AddBookForm = () => {
  const [bookId, setBookId] = useState('');
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const book = { bookId, bookName, author };

    const response = await fetch('api/book', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setBookId('');
      setBookName('');
      setAuthor('');
      setError(null);
      console.log('New Book Added');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Book</h3>
      <div sx={{ marginTop: '50px' }}>
        <TextField
          id="outlined-basic"
          label="Book ID"
          variant="outlined"
          onChange={(e) => setBookId(e.target.value)}
          value={bookId}
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          label="Book Name"
          variant="outlined"
          onChange={(e) => setBookName(e.target.value)}
          value={bookName}
          sx={{ marginTop: '20px' }}
        />
      </div>

      <div>
        <TextField
          id="outlined-basic"
          label="Book Author"
          variant="outlined"
          onChange={(e) => setAuthor(e.target.value)}
          value={author}
          sx={{ marginTop: '20px' }}
        />
      </div>

      <Button type="submit" variant="contained" sx={{ marginTop: '20px' }}>
        Add Book
      </Button>
      {error && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error}
        </Alert>
      )}
    </form>
  );
};

export default AddBookForm;
