'use strict';

var entries = require('./models/entries');

var entries = [
	'Feed the dog',
	'Walk the kids',
	'Water the trees'
];

entries.forEach(function (entries, index) {
  Entries.find({ 'name': entries }, function(err, todos) {
  	if (!err && !entries.length) {
      Entries.create({ completed: false, name: entries });
  	   }
  });
});
