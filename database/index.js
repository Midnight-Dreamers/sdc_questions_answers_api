const { Pool } = require('pg');
const pool = new Pool({
  host: '54.219.45.99',
  user: 'postgres',
  database: 'q_and_a',
  password: 'password123',
  port: 3002
})
module.exports = pool;
