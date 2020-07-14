const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'ed',
  password: '',
  database: 'user_database',
  host: 'localhost',
});

pool.connect((err) => {
  if (!err) console.error('DB connection successful');
  else console.error('Error connecting to client');
});

module.exports = pool;
