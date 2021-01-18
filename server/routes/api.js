const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

router.post('/report', mainController.reportClosed, (req, res) => {
  res.status(200).send({ closedStoreId: res.locals.closedStoreId });
});

// TO DO - send back closed locations on res.locals too, hit middleware
router.post('/', mainController.getResults, (req, res) => {
  console.log('back in api.js'),
    //console.log('res.locals.results --->', res.locals.results);
    res.status(200).send({
      results: res.locals.results,
      term: res.locals.term,
    }); // send back term, send back category   // send back closed locations as well - object with keys of business IDs
});

module.exports = router;
