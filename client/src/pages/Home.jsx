//components
import { Grid } from '@mui/material';
import BookDetails from '../components/BookDetails';

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <div className="home">
          <div className="books">
            <BookDetails />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default Home;
