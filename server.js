var express = require('express');

var bodyParser = require('body-parser');
var app = express();

var mongoose = require('mongoose');

var uri = 'mongodb://user:pass@host:port/db';

mongoose.Promise = global.Promise

mongoose.connect(uri);

var db = mongoose.connection

// if (process.env.MONGODB_URI) {
//   mongoose.connect(process.env.MONGODB_URI)
// } else {
//   mongoose.connect('mongodb://localhost/portfolio-2');
// }


app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var portfolioController = require('./controllers/projects.js');
app.use('/api/portfolio', portfolioController);

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;