const mongoose = require('mongoose');

const portfolio = new mongoose.Schema({
    coinId: { type: String, require: true, unique: true },
    totalInvestment: { type: Decimal128, require: true }
})

const profileSchema = new mongoose.Schema({
    userId: { type: String, require: true, unique: true },
    guildId: { type: String, require: true, unique: false },
    bank: { type: Decimal128, require: true, default: 10000 },
    holdings: [portfolio]
});

const model = mongoose.model('ProfileModels', profileSchema);

module.exports = model;