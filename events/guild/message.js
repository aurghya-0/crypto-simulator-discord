module.exports = (Discord, client, message) => {
    const prefix = '$';

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (command) command.execute(client, message, args, Discord);
}