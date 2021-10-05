const { Router } = require('express');
const controller = require('./controller.js');

const router = Router();

router.get('/', controller.getQuestions);
router.post('/', controller.addQuestion);
router.put('/:question_id/helpful', controller.updateQuestionHelpfulness);
router.put('/:question_id/reported', controller.updateQuestionReported);

router.get('/:question_id/answers', controller.getAnswers);
router.post('/:question_id/answers', controller.addAnswer)


module.exports = router;