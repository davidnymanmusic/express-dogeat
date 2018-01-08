const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('caution', {
    title: 'CAUTION!',
    name: 'David Nyman',
    homeTitle: 'DOG EAT ___?'});
});

module.exports = router;
