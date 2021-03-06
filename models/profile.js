const mongoose = require('mongoose');
const mongodb = require('mongodb');
const portfolioSchema = require('./portfolio').schema;

const profileSchema = new mongoose.Schema({
    userId: { type: String, require: true, unique: true },
    guildId: { type: String, require: true, unique: false },
    bank: { type: mongodb.Decimal128, require: true, default: 10000 },
    holdings: [portfolioSchema]
});

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;