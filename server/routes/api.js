const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

// TO DO - send back closed locations on res.locals too, hit middleware
router.post('/', mainController.getResults, (req, res) => {
  console.log('back in api.js'),
    console.log('res.locals.results --->', res.locals.results);
  res.status(200).send({ results: res.locals.results });
});

module.exports = router;
