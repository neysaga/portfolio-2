var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses information from POST
    methodOverride = require('method-override'); //used to manipulate POST

var ProjectsController = require('../controllers/projects');


router.route('/portfolio-2')

  //see my work
  .get(ProjectsController.getAll)

  module.exports = router