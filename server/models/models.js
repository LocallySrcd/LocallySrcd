const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoURI =
  'mongodb+srv://shahDBA:shahDBA123@clusterfudge.lrsuc.mongodb.net/locally?retryWrites=true&w=majority';

// require bcrypt and use it to encrypt the
const SALT_WORK_FACTOR = 5;
const bcrypt = require('bcrypt');

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to our DB!');
});

const userSchema = new Schema({
  username: { type: String, required: true },
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

module.exports = mongoose.model('users', userSchema);
