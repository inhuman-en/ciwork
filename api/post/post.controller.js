var _ = require('lodash');
var Post = require('./post.model');

// Get list of posts
exports.index = function (req, res) {

    Post.find({}, function (err, posts) {
            if (err) {
                return handleError(res, err);
            }

            console.log(posts);

            res.json(200, posts)
        });
};

function handleError(res, err) {
    return res.send(500, err);
}
