const Discord = require ("discord.js");
const execute = async (Leggie, message, args) => {
    message.delete();

    let emoji0 = message.guild.emojis.cache.find(emoji => emoji.name === 'ig'); 
    let emoji1 = message.guild.emojis.cache.find(emoji => emoji.name === 'pokemon');
    let emoji2 = message.guild.emojis.cache.find(emoji => emoji.name === 'seta');
    let emoji3 = message.guild.emojis.cache.find(emoji => emoji.name === 'loading');
    let emoji4 = message.guild.emojis.cache.find(emoji => emoji.name === 'staff');


    let embed0 = new Discord.MessageEmbed()
        .setColor('#5a049e')
        .setThumbnail('https://media.discordapp.net/attachments/597376140016877589/739689493019492433/Copy_of_eSports_Ninja_-_APPROVED.jpg')
        .setTitle(`${emoji0} **Night Club** ${emoji0}`) 
        .addField(`${emoji1} Que tal conhecer melhor o servidor hein?`,` procure as salas com as informações do servidor <#739372649909715046>`)
        .addField(`${emoji2} Estou aqui para te ajudar vou listar abaixo alguns comandos!`, `${emoji3} Ops ainda não temos comandos para membros comuns! `)
        .addField(`${emoji4} Se precisar de alguma ajuda procure o canal de suporte`, ' <#672334936929468437>')
        .setTimestamp()
        .setFooter(Leggie.user.username, Leggie.user.displayAvatarURL())
        message.channel.send(embed0)
}
module.exports = {
    name: "help",
    execute,
}