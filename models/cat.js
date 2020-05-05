const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Shema
const CatSchema = new Schema({
    name: String
});

module.exports = Cat = mongoose.model('cat', CatSchema);