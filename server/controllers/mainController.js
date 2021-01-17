const path = require('path');
const yelp = require('yelp-fusion');
const client = yelp.client(
  'C875dNRjWAzLaQgmC7nd_wO97JFWpg6PuDdI9mfVsru_cOTvyoouijdnEAQwW2rnVUJ5lELwswChXgQaOJpSNpLK4tK6Jr_Gi1xRtp3dWA2UZT7B7xYP5zDBmEYDYHYx'
);

const mainController = {};
// sup Anson and Daniel. Check this out 😮‍💨 lol. fart emoji haha 💩 lol
mainController.getResults = (req, res, next) => {
  const { term, category, longitude, latitude } = req.body;
  client
    .search({
      term: term,
      category: category,
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
      res.locals.category = category;
      res.locals.term = term;
      return next();
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = mainController;
