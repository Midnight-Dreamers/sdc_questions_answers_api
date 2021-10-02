const getQuestions = 'SELECT * FROM questions WHERE product_id = $1';
const addQuestion = 'INSERT INTO questions (body, asker_name, asker_email, product_id, date_written) VALUES ($1, $2, $3, $4, $5)';
const getAnswers = 'SELECT * FROM answers WHERE question_id = $1';
const getPhotos = 'SELECT * FROM photos WHERE answer_id = 5';
module.exports = {
  getQuestions,
  addQuestion,
  getAnswers,
  getPhotos
}