const mysql = require('mysql');

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
