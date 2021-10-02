const { Pool } = require('pg');
const pool = new Pool({
  host: 'localhost',
  database: 'q_and_a',
  password: '',
  port: 5432
})
module.exports = pool;
