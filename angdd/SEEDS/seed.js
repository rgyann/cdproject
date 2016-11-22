'use strict';

var Entries = require('../data/models/entries.js');

var entries = [
	{ title: 'entries One', except: false },
	{ title: 'entries Two', except: false }
];

entries.forEach(function (entry, index) {
  Entries.find({ 'title': entry.title }, function(err, entries) {
  	if (!err && !entries.length) {
      	Entries.create(entry);
		}
  });
});
