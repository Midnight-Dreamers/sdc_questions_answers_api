const getQuestions = `SELECT json_build_object(
  'product_id', product_id,
  'results', json_agg(json_build_object(
    'question_id', id,
    'question_body', body,
    'question_date', TO_CHAR(TO_TIMESTAMP(date_written / 1000.0) AT TIME ZONE 'utc', 'YYYY-MM-DDFMTHH:MI:SS.MSFMZ'),
    'asker_name', asker_name,
    'question_helpfulness', helpfulness,
    'reported', reported,
    'answers', (SELECT json_object_agg(answers.id, json_build_object(
      'id', id,
      'body', body,
      'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000.0) AT TIME ZONE 'utc', 'YYYY-MM-DDFMTHH:MI:SS.MSFMZ'),
      'answerer_name', answerer_name,
      'helpfulness', helpfulness,
      'photos', (SELECT json_agg(json_build_object(
        'id', id,
        'url', photo_url
      )) FROM photos WHERE answer_id = answers.id)
    )) FROM answers where question_id = questions.id)
  ))
) FROM questions WHERE product_id = $1 GROUP BY questions.product_id`;

const addQuestion = `INSERT INTO
  questions (body, asker_name, asker_email, product_id, date_written)
  VALUES ($1, $2, $3, $4, $5)`;

const getAnswers = `SELECT json_build_object(
  'question', question_id,
  'results', json_agg(json_build_object(
    'answer_id', id,
    'body', body,
    'date', TO_CHAR(TO_TIMESTAMP(date_written / 1000.0) AT TIME ZONE 'utc', 'YYYY-MM-DDFMTHH:MI:SS.MSFMZ'),
    'answerer_name', answerer_name,
    'helpfulness', helpfulness,
    'photos', (SELECT json_agg(json_build_object(
      'id', id,
      'url', photo_url
    )) FROM photos WHERE answer_id = answers.id)
  ))
) FROM answers WHERE question_id = $1 GROUP BY answers.question_id`;

const addAnswer = `INSERT INTO
answers ( question_id, body, answerer_name, answerer_email, date_written)
VALUES ($1, $2, $3, $4, $5)`;

module.exports = {
  getQuestions,
  addQuestion,
  getAnswers,
  addAnswer
}
