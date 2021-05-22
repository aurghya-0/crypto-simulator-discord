module.exports = {
    name: 'bank',
    description: "Details on your bank account",
    async execute(client, message, args, Discord, profileData) {
        let c = Intl.NumberFormat('en-IN', {
            style: "currency",
            currency: "INR"
        });
        let n = Intl.NumberFormat('en-IN', { style: 'decimal' })
        message.reply(`Your bank account has ${c.format(profileData.bank)}`);
    }
}