const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new discord.RichEmbed()
    .setAuthor(`Otis`, "https://cdn.discordapp.com/attachments/571825623425613842/572125185193279528/kittvMoin4.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/571825623425613842/584429030686720000/KitTVLogo.png")
    .addField(`**Server Name:**`, `KitTV`, true)
    .addField(`**Server Besitzer:**`, `KitTV`, true)
    .addField(`**Twitch**`, `[KitTV](https://www.twitch.tv/kittv/)`, true)
    .addField(`**Discord:**`, `[KitTV](https://discordapp.com/invite/DcxKjWR)`, true)
    .addField(`**Twitter**`, `[KitTVDE](https://www.twitter.com/kittvde/)`, true)
    .addField(`**Instagram**`, `[KitTVDE](https://www.instagram.com/kittvde/)`, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", )
    .setTimestamp()
    .setColor(0x994d00);
  message.delete();
  message.channel.send(embed).then(console.log).catch(console.error);
}

module.exports.help = {
  name: 'kitpartner',
  aliases: ['kp']
};