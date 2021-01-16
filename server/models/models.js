const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MongoURI =
  'mongodb+srv://shahDBA:shahDBA123@clusterfudge.lrsuc.mongodb.net/starwars?retryWrites=true&w=majority';

mongoose.connect(MongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('connected to our DB!');
});

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  prefLocations: { type: Array, required: true },
});

module.exports = mongoose.model('Username', userSchema);
