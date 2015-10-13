//File Name: project.js
//Author: Christian SImpson
//Web Site name: christianSimpson.azurewebsites.net
//this is the route tha points to the correct ejs template for project when project is clicked on
var express = require('express');
var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Christian R. Simpson' });
});

module.exports = router;
