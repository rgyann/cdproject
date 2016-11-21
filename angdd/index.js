'use strict';

var express = require('express');
var blog = require('./data/models/entries.js');
//var entries = require('../../data/entries.json');

var router = express.Router();

router.get('/posts', function(req, res) {
  blog.find({}, function(err, entries) {
    if(err) {
      // do something
      return res.status(500).json({message: err.message});
    }
    res.json({entries: entries});
  });
});

router.post('/posts', function(req, res) {
  var entries = req.body;
  entries.create(entries, function(err, entries) {
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
  entries.findByIdAndUpdate(id, entries, {new: true}, function(err, entries) {
    if(err) {
      return res.status(500).json({err: err.messge});
    }
    res.json({'entries': entries, message: 'entries Created'});
  })
});

//entries: Add PUT route to update existing entries

//entries: Add DELETE rout
