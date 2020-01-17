const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`Toni Raccoon`, "https://cdn.discordapp.com/attachments/390216806259752961/548153656000774204/Pb.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584147972036493352/waschbar2.png")
    .addField(`**Server Name:**`, `Raccrew & Raccoon Aiming`, true)
    .addField(`**Server Besitzer:**`, `Procyos`, true)
    .addField(`**Webseite:**`, `[Raccoon-Gaming](http://raccoon-gaming.jimdofree.com/)`, true)
    .addField(`**Twitch**`, `[Procyos](https://www.twitch.tv/procyos/)`, true)
    .addField(`**Discord:**`, `[Raccrew](https://discord.gg/aRE4Jae) |` + ` [Raccoon Aiming](https://discord.gg/f7CT8yy)`, true)
    .addField(`**Twitter**`, `[@Procyos](https://twitter.com/procyos)`, true)
    .addField(`**Instagram**`, `[@Procyos_Twitch](https://www.instagram.com/procyos_twitch/)`, true)
    .addField(`**DeviantART**`, `[@Hawkwhisper](https://www.deviantart.com/hawkwhisper/art/Commission-Info-2019-792827511)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setTimestamp()
    .setColor(0x61B1DD);
  message.delete();
  message.channel.send(embed).then(console.log).catch(console.error);
}

module.exports.help = {
  name: 'raccrewpartner',
  aliases: ['rp']
};