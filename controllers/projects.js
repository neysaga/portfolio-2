var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser') //parses information from POST

var Project = require('../models/Project');

// GET
router.get('/', function indexAction(request, response) {
  Project.find(function(error, projects) {
    if(error) response.json({message: 'Could not find any projects'});

    response.json({projects: projects});
  })
});

module.exports = router;