const profileModel = require('../../models/profile');

module.exports = async (client, discord, member) => {
    let profile = await profileModel.create({
        userId: member.id,
        guildId: member.guild.id,
        bank: 10000
    });
    profile.save();
}