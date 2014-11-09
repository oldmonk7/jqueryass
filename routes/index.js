var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Pulp Fiction Inc.' });
});

//Get Mobile Page
router.get('/mobile', function(req, res) {
  res.render('mobile', { title: 'Pulp Fiction Inc.' });
});

//Get Big Data Page
router.get('/bigdata', function(req, res) {
  res.render('bigdata', { title: 'Pulp Fiction Inc.' });
});

//Get IoT Page
router.get('/iot', function(req, res) {
  res.render('iot', { title: 'Pulp Fiction Inc.' });
});

//Get management Page
router.get('/management', function(req, res) {
  res.render('management', { title: 'Pulp Fiction Inc.' });
});

//Get location Page
router.get('/location', function(req, res) {
  res.render('location', { title: 'Pulp Fiction Inc.' });
});

// Get Download page
router.get('/download', function(req, res) {
  res.render('download', { title: 'Pulp Fiction Inc.' });
});

module.exports = router;
