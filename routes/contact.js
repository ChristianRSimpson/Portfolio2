var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Christian R. Simpson' });
});

module.exports = router;
