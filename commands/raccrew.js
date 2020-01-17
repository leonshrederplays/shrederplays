const discord = require('discord.js');

module.exports.run = async (bot, message, args, member) => {
    if (message.channel.id === '584378056987115550') {
        message.member.addRole('584376510123606017')
        .then(console.log)
        .catch(console.error);
         message.delete(); 
    } else {
        message.member.sendMessage("Du darfst diesen Command '!raccrew | !racc | !racrew' nur in #zugehörigkeit posten!").then(msg => msg.delete(10000));
        message.delete(); 
    }
};

module.exports.help = {
  name: 'raccrew',
  aliases: ['racc', 'racrew']
};
