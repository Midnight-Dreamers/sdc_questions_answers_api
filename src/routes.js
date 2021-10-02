const { Router } = require('express');
const controller = require('./controller.js');

const router = Router();

router.get('/', controller.getQuestions);
router.post('/', controller.addQuestion);
router.get('/:question_id/answers', controller.getAnswers);
router.get('/photos', controller.getPhotos);

module.exports = router;