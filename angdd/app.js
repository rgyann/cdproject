'use strict';

var express = require('express');
var parser = require('body-parser');
var router = express.Router();

var app = express();

require('./database');

var path = require('path');

var fs = require('fs');

var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, './')));
app.use(parser.json());
app.use('/api', router);

app.listen(port);
