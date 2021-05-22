const Discord = require('discord.js');
const mongoose = require('mongoose');
const client = new Discord.Client();
const key = require('./key');
const fs = require('fs');

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})

mongoose.connect(key.monogdb_server, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(console.log("Connected to Mongodb")).catch(e => console.error(e));

client.login(key.clientToken);