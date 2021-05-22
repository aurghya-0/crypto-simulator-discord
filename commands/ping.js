module.exports = {
    name: 'ping',
    description: "This is a ping command",
    async execute(client, message, args) {
        await message.channel.send('Pong!');
    }
}