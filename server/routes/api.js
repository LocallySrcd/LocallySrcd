const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

router.get('/', mainController.getResults, (req, res, next) => {
  //   console.log('back in api.js'),
  res.status(200).send(`insert fetched data here`);
});

module.exports = router;
