const discord = require('discord.js');
const { bot, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    var user = message.mentions.users.first();
if (!message.mentions.users.size) {
    let avatarembed = new discord.RichEmbed()
        .setAuthor(`Dein Avatar:`, message.author.avatarURL)
        .setImage(message.author.avatarURL, true)
        .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy)`, true)
        .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
        .setTimestamp()
        .setColor("RANDOM");
    message.delete();
    message.channel.send(avatarembed).then(console.log).catch(console.error);
    } else {
        let avatarembed2 = new discord.RichEmbed()
        .setAuthor(`Avatar von:` + user , user.avatarURL)
        .setImage(user.avatarURL, true)
        .addField(`**Discord:** `, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Racoon Aiming](https://discord.gg/f7CT8yy)`, true)
        .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
        .setTimestamp()
        .setColor("RANDOM");
    message.delete();
    message.channel.send(avatarembed2).then(console.log).catch(console.error);
    }
}

module.exports.help = {
  name: 'Avatar',
  aliases: ['ava']
};