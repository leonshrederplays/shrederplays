const discord  = require('discord.js');
const {prefix} = require('../settiings/config.json');
const { Client, RichEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let dmembed = new discord.RichEmbed()
    .setColor(0x00AC00)
    .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setAuthor(`ShrederPlays`, "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
    .addField(`**Benutzer:**`, `${message.member.user.tag} schaue in deine DMs!`)
    .addField(`**Discord:** `, `[PikaArmy](https://discordapp.com/invite/XR7Vw9J) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setTimestamp()
    message.delete();
    message.channel.send(dmembed).then(msg => msg.delete(5000)).then(console.log).catch(console.error);

    let hembed = new discord.RichEmbed()
    .setColor(0x00AC00)
    .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setAuthor(`ShrederPlays`, "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .addField(`**Info-Befehle:**`, `${prefix}serverinfo |Zeigt dir die Serverinformationen an.| ` + `\n${prefix}userinfo |Zeigt dir die Benutzerinfos an.| ` + `\n${prefix}botinfo |Zeigt dir die Botinfos an.|`, true)
    .addField(`**Admin/Mod-Befehle:**`, `${prefix}clear |${prefix}clear 10 als beispiel: Löscht 10 Nachrichten.|\n ` + `\n${prefix}say |${prefix}say Hallo ich bin ein Bot. als beispiel: Lässt den Bot schreiben "Hallo ich bin ein Bot." `, true)
    .addField(`**User-Befehle:**`, `${prefix}8ball |${prefix}8ball Bin ich dumm? als beispiel: Fragt den Bot ob du Dumm bist. (Antworten sind zufällig...)| ` + `\n${prefix}avatar |Zeigt dir deinen Avatar an! + @someone#0000 <-- Zeigt dir seinen Avatar an!|`)
    .addField(`**Partner-Befehle**`, `${prefix}kitpartner | Zeigt dir die Partner-Infos zu KitTV aliase[!kp] |` + `\n${prefix}raccrewpartner | Zeigt dir die Partner-Infos zur Raccrew aliase[!rp] | `, true)
    .addField(`**Zugehörigkeits-Befehle**`, `${prefix}pikaarmy | Gibt dir die Rolle PikaArmy aliase[!pa , !pikarmy] | ` + `\n${prefix}raccrew | Gibt dir die Rolle Raccrew aliase[!racc , !racrew] | ` + `\n${prefix}kittv | Gibt dir die Rolle KitTV aliase[!kit , !kitv] | ` + `\n${prefix}bot | Gibt dir die Rolle BOT |`, true)
    .addField(`**Discord:** `, `[PikaArmy](https://discordapp.com/invite/XR7Vw9J) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
    .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
    .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
    .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
    .setTimestamp()
    message.delete();
    message.author.send(hembed).then(console.log).catch(console.error);

    let membed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail("https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
        .setTitle(`-=- Help Music -=- <>: MUST, []: OPTIONAL`)
        .addField(`${prefix}play <music/url>`, 'Spielt Musik!', true)
        .addField(`${prefix}search <music>`, 'Gibt 10 Ergebnisse von der YouTube suche aus.', true)
        .addField(`${prefix}skip`, 'Skiped zum nächsten Lied in der Queue \n(3 votes gebraucht wenn du keine Berechtigung hast.)', true)
        .addField(`${prefix}volume [volume]`, 'Zeigt die aktuelle Lautstärke wenn eine Zahl zwischen 0-100 eingegeben wird dann ändert es die Lautstärke.', true)
        .addField(`${prefix}pause`, 'Pausiert die Musik.', true)
        .addField(`${prefix}resume`,'Spielt die Musik weiter ab.', true)
        .addField(`${prefix}stop`, 'Stoppt Musik und Bot disconnectet.', true)
        .addField(`${prefix}reload <command>`, 'Reloaded einen Command.', true)
        .addField(`**Discord:** `, `[PikaArmy](https://discordapp.com/invite/XR7Vw9J) |` + ` [ShrederPlays-Labor](https://discord.gg/qDXgc48) `, true)
        .setDescription(`**Der Bot reagiert auf den Prefix: ${prefix}**`)
        .setFooter("Prefix: ! | Der Bot ist immernoch in Entwicklung", "https://cdn.discordapp.com/attachments/390216806259752961/584416056676712483/LeonLogoQuadrat.png")
        .setTimestamp()
    message.delete();
    message.author.send(membed).then(console.log).catch(console.error);

};

module.exports.help = {
    name: 'help',
    aliases: []
};
