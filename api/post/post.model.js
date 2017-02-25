'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  text: String,
  dateCreated: Date,
  dateModified: Date
});

module.exports = mongoose.model('Post', PostSchema);
