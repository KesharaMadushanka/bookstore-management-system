require('dotenv').config();

//express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoutes = require('./route/book');

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/book', bookRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        'Connected to the MongoDB & listening on port ' + process.env.PORT
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });
