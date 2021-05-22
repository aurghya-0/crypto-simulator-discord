const Discord = require('discord.js');
const client = new Discord.Client();
const clientToken = require('./key')

const prefix = '$';

client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'ping') {
        message.channel.send('pong');
    }
});

client.once('ready', () => {
    console.log('Bot is logged in')
});
client.login(clientToken);