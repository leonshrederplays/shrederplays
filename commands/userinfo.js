const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`${message.author.username}`, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .addField(`**Benutzername:** `, `${message.author.username}`, true)
    .addField(`**Hashtag:** `, `${message.author.discriminator}`, true)
    .addField(`**Benutzer-ID:** `, `${message.author.id}`, true)
    .addField(`**Status:** `, `${message.author.presence.status}`, true)
    .addField(`**Spiel:** `, `${message.author.presence.game}`, true)
    .addField(`**Rolle:**`, `${message.member.highestRole}`, true)
    .addField(`**Erstellt am:** `, `${message.author.createdAt}`, true)
    .addField(`**Discord:** `, `[PikaArmy](https://discord.gg/k3DVXRE) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setTimestamp()
    .setColor(0x00FF00);
  message.delete();
  message.channel.send(embed).then(console.log).catch(console.error);
}

module.exports.help = {
  name: 'userinfo',
  aliases: []
};