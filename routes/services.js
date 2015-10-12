var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Christian R. Simpson' });
});

module.exports = router;
