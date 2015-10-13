//File Name: contact.js
//Author: Christian SImpson
//Web Site name: christianSimpson.azurewebsites.net
//this is the route that points to the correct ejs template for contact when contact is clicked on
var express = require('express');
var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Christian R. Simpson' });
});

module.exports = router;
