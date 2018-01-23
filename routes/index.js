const express = require('express');
const router = express.Router();
const knex = require('./db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('yes', {
    title: 'EAT?',
    name: 'David Nyman',
    homeTitle: 'DOG EAT ___?',
    info: 'What you need to know:'
  });
});



router.get('/food', (req, res) => {
  knex('food_table').then((rows) => {
    res.format({
      'application/json': () => res.json(rows),
      // 'text/html': () => res.render('birds/index', { birds: rows }),
      'default': () => res.sendStatus(406)
    });
  });
});

router.get('/food/:food_name', (req, res) => {
  const food_name = req.params.food_name;
  knex('food_table').then((rows) => {
    function search(nameKey, rowsArray){
    for (var i=0; i < rowsArray.length; i++) {
        if (rowsArray[i].food_name === nameKey) {
            return rowsArray[i];
        }
    }
}
    res.format({
      'application/json': () => res.json(rows),
      'text/html': () => res.render('home', {
        title: (search(food_name, rows).edible + "!").toUpperCase(),
        name: search(food_name, rows).food_name,
        description: search(food_name, rows).description,
        homeTitle: ('DOG EAT ' + search(food_name, rows).food_name + "?").toUpperCase()
        }),
      'default': () => res.sendStatus(406)

    });
          console.log(food_name)
  });
});

module.exports = router;
