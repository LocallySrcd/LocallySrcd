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
      // console.log(response.jsonBody.businesses[0]);
      let counter = 0;
      const reducedResults = response.jsonBody.businesses.reduce(
        (acc, cv, idx) => {
          // checking if the results arr of obj's id matches the closed store's arr of obj's id
          // while checking the result's objs' ids
          // see if they match the
          let storeIdVal = cv.id;
          if (res.locals.closedStoresList.hasOwnProperty(storeIdVal)) {
            counter++;
            return acc;
          }

          if (idx < 10 + counter) {
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

// syntax for get all
// userController.getAllUsers = (req, res, next) => {
//   User.find({}, (err, users) => {
//     if (err) return next(`Error in getAllUsers middleware: ${err}`);

//     res.locals.users = users;
//     return next();
//   });
// };

mainController.getClosedStores = (req, res, next) => {
  console.log('inside get closed store middleware');

  ClosedStores.find({}, (err, closedStores) => {
    if (err) return next(`Error in getClosedStores middleware: ${err}`);
    const closedStoreIdCache = {};
    // this is an arr of objs which has closed store id's
    // loop through closedstores arr
    // put ids into an obj
    for (let obj of closedStores) {
      let innerId = obj.storeId;
      // the actual id values are the keys, bools are the vals
      closedStoreIdCache[innerId] = true;
    }
    res.locals.closedStoresList = closedStoreIdCache;
    console.log('closed stores list ', res.locals.closedStoresList);
    return next();
  });
};

mainController.reportClosed = (req, res, next) => {
  console.log('in reportClosed middleware');

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
      console.log('new closed store in db');
      res.locals.closedStoreId = storeId;
      return next();
    }
  );
};

module.exports = mainController;
