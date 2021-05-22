const apiKey = require('../key').nomicsKey;
const axios = require('axios');

module.exports = {
    name: 'buy',
    description: "Buying",
    async execute(client, message, args, Discord) {
        const url = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=${args[0]}&interval=1d,30d&convert=INR&per-page=100&page=1`;

        let response = await axios.get(url);

        if (response.data.length < 0) {
            message.reply("This currency is not available.")
        }

        let details = response.data[0];

        let c = Intl.NumberFormat('en-IN', {
            style: "currency",
            currency: "INR"
        });
        let n = Intl.NumberFormat('en-IN', { style: 'decimal' })

        currentPrice = details.price;
        buyingAmount = args[1];

        unitsBought = buyingAmount / currentPrice;

        await message.reply(`You have bought ${unitsBought} units of ${details.name} at a price of ${c.format(details.price)} per unit`);
    }
}