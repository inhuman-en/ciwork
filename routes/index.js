var express = require('express');
var router = express.Router();
var Post = require('../api/post/post.model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Blog!'});
});

module.exports = router;
