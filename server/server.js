const express = require('express');
const routes = require('../src/routes.js');

const app = express();
const port = 1234;

app.use(express.json());

app.use('/qa', routes);

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
