var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yes', {
    title: 'YES!',
    name: 'David Nyman'});
});

module.exports = router;
