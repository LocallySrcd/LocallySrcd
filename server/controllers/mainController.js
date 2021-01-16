const path = require('path');
const yelp = require('yelp-fusion');
const client = yelp.client(
  'C875dNRjWAzLaQgmC7nd_wO97JFWpg6PuDdI9mfVsru_cOTvyoouijdnEAQwW2rnVUJ5lELwswChXgQaOJpSNpLK4tK6Jr_Gi1xRtp3dWA2UZT7B7xYP5zDBmEYDYHYx'
);

const mainController = {};

mainController.getResults = (req, res, next) => {
  client
    .search({
      term: 'Gym',
      categories: 'Fitness',
      location: 'New York, NY',
    })
    .then((response) => {
      // console.log(response);
      console.log(response.jsonBody.businesses[0]);
      let filtered = response.jsonBody.business.filter((obj, idx) => {});
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = mainController;
