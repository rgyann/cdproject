'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entriesSchema = new Schema({
  title:  String,
  exerpt: String,
  content:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

var model = mongoose.model('entries' entriesSchema);

module.exports = model;
