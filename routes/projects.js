var express = require('express');
var router = express.Router();

/* GET projects listing. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Christian R. Simpson' });
});

module.exports = router;
