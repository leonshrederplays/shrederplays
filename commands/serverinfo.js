const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`**${message.guild.name}**`, "https://cdn.discordapp.com/attachments/390216806259752961/584412214266429440/LeonLogo.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584412214266429440/LeonLogo.png")
    .addField(`**Official Discord:**`, `[PikaArmy](https://discordapp.com/invite/XR7Vw9J)`)
    .addField(`**Server Name:**`, `${message.guild.name}`, true)
    .addField(`**Server Besitzer:**`, `${message.guild.owner}`, true)
    .addField(`**Benutzer:**`, `${message.guild.memberCount}`, true)
    .addField(`**Rollen:**`, `${message.guild.roles.size}`, true)
    .addField(`**Webseite:**`, `In Arbeit 10% fertig`, true)
    .addField(`**Erstellt am:**`, message.guild.createdAt)
    .addField(`**Beigetreten am:**`, message.member.joinedAt)
    .addField(`**Discord:** `, `[PikaArmy](https://discordapp.com/invite/XR7Vw9J) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setTimestamp()
    .setColor(0x002AFF);
  message.delete();
  message.channel.send(embed).then(console.log).catch(console.error);
}

module.exports.help = {
  name: 'serverinfo',
  aliases: []
};