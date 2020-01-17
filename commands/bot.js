const discord = require('discord.js');

module.exports.run = async (bot, message, args, member) => {
    if (message.channel.id === '584378056987115550') {
        message.member.addRole('584381486384545792')
        .then(console.log)
        .catch(console.error);
    } else {
        message.member.sendMessage("Du darfst diesen Command '!bot' nur in #zugehörigkeit posten!");
    }
};

module.exports.help = {
  name: 'bot',
  aliases: []
};