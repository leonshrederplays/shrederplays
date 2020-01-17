const discord = require('discord.js');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!args[2]) return message.reply("Bitte stelle eine ganze Frage!");
    let replies = ["Ja.", "Nein.", "Frag mich später nochmal.", "Vielleicht."];
  
    let result = Math.floor((Math.random()  * replies.length));
    let question = args.slice().join(" ");
  
   let ballembed = new discord.RichEmbed()
    .setAuthor(`ShrederPlays Hellseher`, "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .addField("**Benutzer:**", `${message.author.username}`, true)
    .addField("**Frage:**", question)
    .addField("**Antwort:**", replies[result])
    .addField(`**Discord:** `, `[PikaArmy](https://discord.gg/k3DVXRE) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setTimestamp()
    .setColor("#FF9900");
  message.delete();
  message.channel.send(ballembed).then(console.log).catch(console.error);
}

module.exports.help = {
  name: '8ball',
  aliases: ['ball']
};
