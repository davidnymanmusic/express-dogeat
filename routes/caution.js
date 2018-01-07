var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('caution', {
    title: 'CAUTION!',
    name: 'David Nyman'});
});

module.exports = router;
