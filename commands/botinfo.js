const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`ShrederPlays`, "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .addField(`Version:`, `0.9.9`, true)
    .addField(`Node JS:`, `v10.5.0`, true)
    .addField(`Library:`, `[discord.js](https://discord.js.org/#/)`, true)
    .addField(`Server:`, `${bot.guilds.size}`, true)
    .addField(`Benutzer:`, `${bot.users.size}`, true)
    .addField(`Website:`, `In Entwicklung... 10% Abgeschlossen.`, true)
    .addField(`Erstellt am:`, bot.user.createdAt)
    .addField(`Developer:`, `@Leon|ShrederPlays#2076`, true)
    .addField(`**Discord:** `, `[PikaArmy](https://discord.gg/k3DVXRE) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setTimestamp()
    .setColor(0xFF0092);
  message.delete();
  message.channel.send(embed).then(console.log).catch(console.error);
}

module.exports.help = {
  name: 'botinfo',
  aliases: ['binfo']
};