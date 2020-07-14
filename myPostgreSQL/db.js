const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'ed',
  password: '',
  database: 'user_database',
  host: 'localhost',
  posr: 5432,
});

module.exports = pool;
