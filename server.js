var express = require('express');

var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');
var db = mongoose.connection
mongoose.connect('mongodb://localhost/portfolio-2');


app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var portfolioController = require('./controllers/projects.js');
app.use('/api/portfolio', portfolioController);

const port = process.env.PORT || 3000;
app.listen(port);