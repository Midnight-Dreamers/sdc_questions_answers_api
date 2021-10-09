const { Pool } = require('pg');
const pool = new Pool({
  host: '18.144.41.115',
  user: 'postgres',
  database: 'q_and_a',
  password: 'password123',
  port: 3002
})
module.exports = pool;
