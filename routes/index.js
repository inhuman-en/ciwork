var express = require('express');
var router = express.Router();
var Post = require('../api/post/post.model');

/* GET home page. */
router.get('/', function(req, res, next) {

  Post.find({}, function (err, posts) {

      if (err) {
          return handleError(res, err);
      }

      console.log(posts);

      res.render('index', { title: 'Blog!', posts: posts });
  });  
});

module.exports = router;
