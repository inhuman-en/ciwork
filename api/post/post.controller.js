let Post = require('./post.model');

// Get list of posts
exports.index = function (req, res) {

    Post.find({}, function (err, posts) {
        if (err) {
            return handleError(res, err);
        }

        console.log(posts);

        res.status(200).json(posts);
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
