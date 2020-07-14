const express = require('express');
const app = express();
const pool = require('./db');

app.use(express.json()); // => req.body enable to access clients data

// Create ROUTES
// GET all data from db

// GET selected data from db

// POST add data to db

app.post('/users', async (req, res) => {
  try {
    const { name, password } = req.body;
    const newUser = await pool
      .query('INSERT INTO users (name, password) VALUES ($1, $2) RETURNING *', [
        name,
        password,
      ])
      .then((message) => {
        console.log('User added successfully');
        console.log('User added successfully');
      });
    res.json('User Added Successfully');
  } catch (err) {
    console.error(err.message);
  }
});
// PUT update data in db

// DELETE delete data in db

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
