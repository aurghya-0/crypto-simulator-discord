const mongoose = require('mongoose');
const mongodb = require('mongodb');

const portfolioSchema = new mongoose.Schema({
    coinId: { type: String, require: true, unique: true },
    totalInvestment: { type: mongodb.Decimal128, require: true }
});

const model = mongoose.model('PortfolioModels', portfolioSchema);

module.exports = model;