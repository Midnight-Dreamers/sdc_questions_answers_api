const { Router } = require('express');
const controller = require('./controller.js');

const router = Router();

router.get('/questions', controller.getQuestions);
router.post('/questions', controller.addQuestion);
router.put('/questions/:question_id/helpful', controller.updateQuestionHelpfulness);
router.put('/questions/:question_id/reported', controller.updateQuestionReported);

router.get('/questions/:question_id/answers', controller.getAnswers);
router.post('/questions/:question_id/answers', controller.addAnswer)
router.put('/answers/:answer_id/helpful', controller.updateAnswerHelpfulness);
router.put('/answers/:answer_id/reported', controller.updateAnswerReported);


module.exports = router;