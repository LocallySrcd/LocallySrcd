const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

router.post('/', mainController.getResults, (req, res, next) => {
  console.log('back in api.js'),
    console.log('res.locals.results --->', res.locals.results);
  res.status(200).send({ results: res.locals.results });
});

module.exports = router;
