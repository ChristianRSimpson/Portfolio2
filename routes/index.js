//File Name: index.js
//Author: Christian SImpson
//Web Site name: christianSimpson.azurewebsites.net
//this is the route tha points to the correct ejs template for index when home is clicked on
var express = require('express');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Christian R. Simpson' });
});

module.exports = router;
