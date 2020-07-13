const mysql = require('mysql');
const express = require('express');

const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'SQL_DB',
});

mysqlConnection.connect((error) => {
  if (!error) console.log('DB connection successful');
  else
    console.log(
      'DB connection failed \n Error : ' + JSON.stringify(error, undefined, 2)
    );
});

app.listen(3000, () =>
  console.log('Express server is running at port no: 3000 ')
);

// CRUD actions
// Read from DB
app.get('/users', (res, req) => {
  mysqlConnection.query('SELECT * FROM users', (error, rows, fields) => {
    if (!error) console.log(rows);
    else console.log(error);
  });
});
