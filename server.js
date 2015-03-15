var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbConfig = require('./config/database');

var routes = require('./app/routes');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
mongoose.connect(dbConfig.url);
var Monster = require('./app/models/monster');

app.use('/api', routes);

app.listen(3000);
console.log('Server running on http://127.0.0.1:3000/');
