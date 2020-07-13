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
  multipleStatements: true,
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
app.get('/users', (req, res) => {
  mysqlConnection.query('SELECT * FROM users', (error, rows, fields) => {
    if (!error) res.send(rows);
    else console.log(error);
  });
});

// Read from DB WHERE id
app.get('/users/:id', (req, res) => {
  mysqlConnection.query(
    'SELECT * FROM users WHERE id_users = ?',
    [req.params.id],
    (error, rows, fields) => {
      if (!error) res.send(rows);
      else console.log(error);
    }
  );
});

// Delete from DB WHERE id
app.delete('/users/:id', (req, res) => {
  mysqlConnection.query(
    'DELETE FROM users WHERE id_users = ?',
    [req.params.id],
    (error, rows, fields) => {
      if (!error) res.send('User deleted successfully');
      else console.log(error);
    }
  );
});

//Insert an user
app.post('/users', (req, res) => {
  let user = req.body;
  var sql =
    'SET @id_users = ?;SET @name = ?;SET @password = ?; \
  CALL addOrEdit(@id_users,@name,@password);';
  mysqlConnection.query(
    sql,
    [user.id_users, user.name, user.password],
    (err, rows, fields) => {
      if (!err)
        rows.forEach((element) => {
          if (element.constructor == Array)
            res.send('Inserted user id : ' + element[0].id_users);
        });
      else console.log(err);
    }
  );
});
