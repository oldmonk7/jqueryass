var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

//Get Mobile Page
router.get('/mobile', function(req, res) {
  res.render('mobile', { title: 'Express' });
});

//Get Big Data Page
router.get('/bigdata', function(req, res) {
  res.render('bigdata', { title: 'Express' });
});

//Get IoT Page
router.get('/iot', function(req, res) {
  res.render('iot', { title: 'Express' });
});

// Get Download page
router.get('/download', function(req, res) {
  res.render('download', { title: 'Express' });
});

module.exports = router;
