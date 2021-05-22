const apiKey = require('../key').nomicsKey;
const axios = require('axios');

module.exports = {
    name: 'describe',
    description: "Describes a cryptocurrency.",
    async execute(client, message, args, Discord) {
        const url = `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&ids=BTC&interval=1d,30d&convert=INR&per-page=100&page=1`;

        let response = await axios.get(url);
        let details = response.data[0];

        let c = Intl.NumberFormat('en-IN', {
            style: "currency",
            currency: "INR"
        });
        let n = Intl.NumberFormat('en-IN', { style: 'decimal' })

        console.log(details);

        descriptionBuilder = `Price: ${c.format(details.price)}\n`;
        changeBuilder = [
            {
                name: '1 Day Change',
                value: `Volume: ${n.format(details['1d'].volume)}\nPrice Change: ${n.format(details['1d'].price_change_pct)}%`
            },
            {
                name: '30 Days Change',
                value: `Volume: ${n.format(details['30d'].volume)}\nPrice Change: ${n.format(details['30d'].price_change_pct)}%`
            }
        ]

        const embed = new Discord.MessageEmbed()
            .setTitle(`${details.name} Details`)
            .setDescription(descriptionBuilder)
            .addFields(changeBuilder);

        if (details['1d'].price_change_pct < 0) {
            embed.setColor('#f50202');
        } else {
            embed.setColor('#0af502');
        }

        await message.channel.send(embed);
    }
}