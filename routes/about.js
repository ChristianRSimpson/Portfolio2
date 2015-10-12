var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Christian R. Simpson' });
});

module.exports = router;
