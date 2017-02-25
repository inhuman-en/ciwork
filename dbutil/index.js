var mongoose = require('mongoose');
var config = require('../envconfig');
var _ = require('lodash');

module.exports = {
    connect: function () {
        'use strict';

        mongoose.connect(config.mongo.uri);
        console.log(`connected to db at ${config.mongo.uri}`);
    },

    seed: function () {
        'use strict';

        var posts = require('./seed');
        var Post = require('../api/post/post.model');

        _.each(posts, function (post) {
            post.dateCreated = post.dateModified = new Date();
        });

        console.log('seeding db..');

        Post.find({}).remove(function() {
            Post.create(posts);
        });
    }
}