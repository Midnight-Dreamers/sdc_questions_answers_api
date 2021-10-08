const { Pool } = require('pg');
const pool = new Pool({
  host: '18.144.41.115',
  database: 'q_and_a',
  password: '',
  port: 3002
})
module.exports = pool;
