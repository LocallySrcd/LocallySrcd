const path = require('path');
const yelp = require('yelp-fusion');
const client = yelp.client(
  'C875dNRjWAzLaQgmC7nd_wO97JFWpg6PuDdI9mfVsru_cOTvyoouijdnEAQwW2rnVUJ5lELwswChXgQaOJpSNpLK4tK6Jr_Gi1xRtp3dWA2UZT7B7xYP5zDBmEYDYHYx'
);
const ClosedStores = require('../models/closedStoreModel.js');

const mainController = {};
// sup Anson and Daniel. Check this out 😮‍💨 lol. fart emoji haha 💩 lol
mainController.getResults = (req, res, next) => {
  const { term, longitude, latitude } = req.body;
  console.log(req.body);
  client
    .search({
      term: term,
      latitude: latitude,
      longitude: longitude,
    })
    .then((response) => {
      // use reduce to take response object's array of businesses and reduce it down to 10, removing unneeded key-value pairs
      const reducedResults = response.jsonBody.businesses.reduce(
        (acc, cv, idx) => {
          if (idx < 10) {
            delete cv.alias;
            delete cv.is_closed;
            delete cv.transactions;
            delete cv.price;
            acc.push(cv);
          }
          return acc;
        },
        []
      );
      res.locals.results = reducedResults;
      // send back term, send back category
      //res.locals.category = category;
      res.locals.term = term;
      return next();
    })
    .catch((e) => {
      console.log(e);
    });
};

mainController.getClosedStores = (req, res, next) => {
  const { storeId } = req.body;
};

mainController.reportClosed = (req, res, next) => {
  console.log('in reportClosed controller');

  const { storeId } = req.body;

  console.log(storeId);

  ClosedStores.create(
    {
      storeId: storeId,
    },
    (err, newClosedStore) => {
      if (err)
        return next({
          log: 'Error: Store Is Already Marked As Closed',
          message: err,
        });
      const { storeId } = newClosedStore;
      res.locals.closedStoreId = storeId;
      return next();
    }
  );
};

module.exports = mainController;
