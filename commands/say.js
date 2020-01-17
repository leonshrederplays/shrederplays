const discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let sayRole1 = message.guild.roles.find("name", "Owner")
  
    if(message.member.roles.has(sayRole1.id)) {
      message.channel.send(args.join(' '))
      message.delete();   
  } else {
      message.reply("Du hast nicht die nötigen Permissions")
    }
}

module.exports.help = {
    name: 'say',
    aliases: []
};