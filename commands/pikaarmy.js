const discord = require('discord.js');

module.exports.run = async (bot, message, args, member) => {
    if (message.channel.id === '584378056987115550') {
        message.member.addRole('584376903167639552')
        .then(console.log)
        .catch(console.error);
         message.delete(); 
    } else {
        message.member.sendMessage("Du darfst diesen Command '!pikaarmy | !pa | !pikarmy' nur in #zugehörigkeit posten!").then(msg => msg.delete(10000));
        message.delete();
    }
};

module.exports.help = {
  name: 'pikaarmy',
  aliases: ['pa', 'pikarmy']
};
