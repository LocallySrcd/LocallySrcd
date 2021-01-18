const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const closedStoresSchema = new Schema({
  storeId: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('ClosedStores', closedStoresSchema);
