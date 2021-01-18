const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// require bcrypt and use it to encrypt the
const SALT_WORK_FACTOR = 5;
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  prefLocations: { type: Array, required: true },
});

userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });
});

module.exports = mongoose.model('User', userSchema);
