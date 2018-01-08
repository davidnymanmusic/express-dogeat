var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('no', {
    title: 'NO!',
    name: 'David Nyman',
    homeTitle: 'DOG EAT ___?'});
});

module.exports = router;
