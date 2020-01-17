const discord = require('discord.js');

module.exports.run = async (bot, message, args, member) => {
    if (message.channel.id === '584378056987115550') {
        message.member.addRole('584376530059395115')
        .then(console.log)
        .catch(console.error);
         message.delete(); 
    } else {
        message.member.sendMessage("Du darfst diesen Command '!kittv | !kit | !kitv' nur in #zugehörigkeit posten!");
        message.delete(); 
    }
};

module.exports.help = {
  name: 'kittv',
  aliases: ['kit', 'kitv']
};
