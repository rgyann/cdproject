'use strict';

var angular = require('angular');

angular.module('entriesListApp')
.service('dataService', function($http, $q) {
  this.getEntries = function(cb) {
    $http.get('/api/entries').then(cb);
  };

  this.deleteEntries = function(entries) {
    console.log("I deleted the " + entries.name + " entries!");
  };

  this.deleteEntries = function(entries) {
    console.log("I saved " + entries.length + " entries!");
  };
});
