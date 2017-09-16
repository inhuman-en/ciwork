var express = require('express');
var router = express.Router();
var postController = require('../api/post/post.controller');

router.get('/', postController.index);
router.get('/stream', postController.stream);

module.exports = router;




