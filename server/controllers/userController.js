const User = require('../models/models.js');
const bcrypt = require('bcrypt');

/*
  const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  prefLocations: { type: Object, required: true }
  });
*/

// will the user provide preferred locations when creating the account? lol
const UserController = {
  createUser(req, res, next) {
    console.log('in UserControler.createUser');
    const { username, password, prefLocations } = req.body;

    // If user creates a new acc
    User.create(
      {
        username: username,
        password: password,
        prefLocations: prefLocations,
      },
      (err, newUser) => {
        if (err)
          return next({
            log: 'Error user already exists',
            message: err,
          });
        const { username, prefLocations } = newUser;
        res.locals.username = username;
        res.locals.prefLocations = prefLocations;
        console.log('res.locals.user -->', res.locals);
        return next();
      }
    );
  },

  // if user logs in
  getUser(req, res, next) {
    console.log('in getUser');
    const { username, password, prefLocations } = req.body;

    User.findOne(
      {
        username: username,
        // password: password,
        // prefLocations: prefLocations,
      },
      (err, foundUser) => {
        if (err)
          return next({
            log: 'Error in user.find middleware',
            message: err,
          });

        bcrypt.compare(password, foundUser.password, (err, result) => {
          if (err) {
            return 'error';
          }
          if (result) {
            res.locals.username = foundUser.username;
            res.locals.prefLocations = foundUser.prefLocations;
            return next();
          }
          return res.status(418).send('Permission denied');
        });
      }
    );
  },

  // if user wants to update pref location
  updateUser(req, res, next) {
    const { username, password, prefLocations } = req.params.user;
    User.findOneAndUpdate(
      {
        username: username,
        password: password,
        prefLocations: prefLocations,
      },
      {
        prefLocations: prefLocations,
      },
      { upsert: true, new: true },
      (err, userObj) => {
        res.locals.updatedUser = userObj;
        return next();
      }
    );
  },

  // delete
};

module.exports = UserController;
