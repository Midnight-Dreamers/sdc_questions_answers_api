const pool = require('../database/index.js');
const queries = require('./queries.js');

const formatQuestions = (resultsFromQuestions) => {
  const formattedResults = [];
  for (let i = 0; i < resultsFromQuestions.length; i++) {
    const currentResults = {
      'question_id': resultsFromQuestions[i].id,
      'question_body': resultsFromQuestions[i].body,
      'question_date': new Date(parseInt(resultsFromQuestions[i].date_written)),
      'asker_name': resultsFromQuestions[i].asker_name,
      'question_helpfulness': resultsFromQuestions[i].helpfulness,
      'reported': resultsFromQuestions[i].reported,
      'answers': {}
    }
    formattedResults.push(currentResults);
  }
  console.log(resultsFromQuestions)
  const returnQuestions = {
    'product_id' : resultsFromQuestions[0].product_id,
    'results': formattedResults
  }
  return returnQuestions;
}

const formatAnswers = (resultsFromAnswers) => {
  let formattedResults = {};
  for (let i = 0; i < resultsFromAnswers.length; i++) {
    formattedResults[resultsFromAnswers[i].id] = {
      'id': resultsFromAnswers[i].id,
      'body': resultsFromAnswers[i].body,
      'date': new Date(parseInt(resultsFromAnswers[i].date_written)),
      'answerer_name': resultsFromAnswers[i].answerer_name,
      'helpfulness': resultsFromAnswers[i].helpfulness,
      'photos': []
    }
  }
  return formattedResults;
}

const getQuestions = (req, res) => {
  const product_id = req.query.product_id;
  pool.query(queries.getQuestions, [product_id], (error, results) => {
    if (error) {
      console.error(error);
    }
    res.status(200).json(formatQuestions(results.rows));
  });
};

const getAnswers = (req, res) => {
  const question_id = req.params.question_id;
  pool.query(queries.getAnswers, [question_id], (error, results) => {
    if (error) {
      console.error(error);
    }
    res.status(200).json(formatAnswers(results.rows));
  });
};

const getPhotos = (req, res) => {
  pool.query(queries.getPhotos, (error, results) => {
    if (error) {
      console.error(error);
    }
    res.status(200).json(results.rows);
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
  getAnswers,
  getPhotos
}

// "question_id": 37,
//         "question_body": "Why is this product cheaper here than other sites?",
//         "question_date": "2018-10-18T00:00:00.000Z",
//         "asker_name": "williamsmith",
//         "question_helpfulness": 4,
//         "reported": false,
//         "answers": {
//           68: {
//             "id": 68,
//             "body": "We are selling it here without any markup from the middleman!",
//             "date": "2018-08-18T00:00:00.000Z",
//             "answerer_name": "Seller",
//             "helpfulness": 4,
//             "photos": []