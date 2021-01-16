const User = require('../models/models.js');

/*
  const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  prefLocations: { type: Object, required: true }
  });
*/

const UserController = {
  createUser(req, res, next) {
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
        res.locals.user = newUser;
      }
    );
  },

  // if user logs in
  getUser(req, res, next) {
    const { username, password, prefLocations } = req.params.user;
    User.findOne(
      {
        username: username,
        password: password,
        prefLocations: prefLocations,
      },
      (err, foundUser) => {
        if (err)
          return next({
            log: 'Error in user.find middleware',
            message: err,
          });
        res.locals.username = foundUser.username;
        res.locals.preferredLocations = founderUser.preferredLocations;
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
