var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', {
    title: 'Hello',
    name: 'David Nyman',
    email: 'davenyman@gmail.com'});
});

module.exports = router;
