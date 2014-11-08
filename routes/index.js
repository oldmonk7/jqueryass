var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

// Get Download page
router.get('/download', function(req, res) {
  res.render('download', { title: 'Express' });
});

module.exports = router;
