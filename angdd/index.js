'use strict';

var express = require('express');
var Entries = require('./data/models/entries.js');
//var entries = require('../../data/entries.json');

var router = express.Router();

router.get('/posts', function(req, res) {
  Entries.find({}, function(err, entries) {
    if(err) {
      // do something
      return res.status(500).json({message: err.message});
    }
    res.json({entries: entries});
  });
});

router.post('/posts', function(req, res) {
  var entries = req.body;
  Entries.create(entries, function(err, entries) {
    if(err) {
      return res.status(500).json({err: err.messge});
    }
    res.json({'entries': entries, message: 'entries Created'});
  })
});

router.put('/posts:id', function(req, res) {
  var id = req.params.id;
  var entries = req.body;
  if(entries && entries._id !== id) {
    return res.status(500).json({err: "Ids don't match!"});
  }
  Entries.findByIdAndUpdate(id, entries, {new: true}, function(err, entries) {
    if(err) {
      return res.status(500).json({err: err.messge});
    }
    res.json({'entries': entries, message: 'entries Created'});
  })
});

module.exports = router;

//entries: Add PUT route to update existing entries

//entries: Add DELETE rout
