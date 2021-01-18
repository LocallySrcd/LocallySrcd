const express = require('express');
const mainController = require('../controllers/mainController.js');
const router = express.Router();

// HEY ITERATION GROUP, WE HID FIVE PANDAS 🐼 SOMEWHERE IN THIS CODEBASE
// Find all 5 to claim a prize 😜😜😜😜   ^ this one DOES NOT count as ONE!

router.post('/report', mainController.reportClosed, (req, res) => {
  res.status(200).send({ closedStoreId: res.locals.closedStoreId });
});

router.post(
  '/',
  mainController.getClosedStores,
  mainController.getResults,
  (req, res) => {
    console.log('back in api.js'),
      res.status(200).send({
        results: res.locals.results,
        term: res.locals.term,
        closedStoreList: res.locals.closedStoresList,
      });
  }
);

module.exports = router;
