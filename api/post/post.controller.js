let Post = require('./post.model');

// Get list of posts
exports.index = function (req, res) {

    Post.find({}, function (err, posts) {
        if (err) {
            return handleError(res, err);
        }

        console.log(`found ${posts.length} posts`);

        res.status(200).json(posts);
    });
};

//Stream lists of posts
exports.stream = function (req, res) {

    var postsStream = Post.find({}).stream();
    var count = 0;

    postsStream.on('data', function (chunk) {
        //send to cliabt via socket
        console.log(`chunk received ${++count}`);
    }).on('error', function (err) {
        console.log(`error in posts stream`);
    }).on('close', function () {
        console.log(`posts stream closed`);

        res.status(200).end();
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
