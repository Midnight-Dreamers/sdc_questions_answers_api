const pool = require('../database/index.js');
const queries = require('./queries.js');

const getQuestions = (req, res) => {
  const product_id = req.query.product_id;
  pool.query(queries.getQuestions, [product_id], (error, results) => {
    if (error) {
      console.error(error);
    }
    res.status(200).json(results.rows[0].json_build_object);
  });
};

const getAnswers = (req, res) => {
  const question_id = req.params.question_id;
  pool.query(queries.getAnswers, [question_id], (error, results) => {
    if (error) {
      console.error(error);
    }
    res.status(200).json(results.rows[0].json_build_object);
  });
};

const addQuestion = (req, res) => {
  const { body, name, email, product_id } = req.body;
  pool.query(queries.addQuestion, [body, name, email, product_id, new Date().getTime()], (error, response) => {
    if (error) {
      console.error(error);
    }
    res.status(201).send('Question Added');
  });
};

module.exports = {
  getQuestions,
  addQuestion,
  getAnswers
}
