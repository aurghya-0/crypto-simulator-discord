const profileModel = require('../../models/profile')

module.exports = async (Discord, client, message) => {
    const prefix = '$';

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    let profileData;
    try {
        profileData = await profileModel.findOne({ userId: message.author.id });
        if (!profileData) {
            let profile = await profileModel.create({
                userId: message.author.id,
                guildId: message.guild.id,
                bank: 10000
            });
            profile.save();
        }
    } catch (e) {
        console.log(e);
    }

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);

    if (command) command.execute(client, message, args, Discord, profileData);
}