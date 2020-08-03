const Discord = require('discord.js');
const execute = (Leggie, message, args) => {
  message.delete();

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Quem você acha que é?");

  const user = message.mentions.users.first() || args[0];

  let reason = args[1];

  if (args.length === 0) return message.reply(`Utilize ${process.env.BOT_PREFIX}ban <@usuario> <@motivo>`);
  if (user.id === '739676202712825979') return message.reply("Você não pode banir o próprio bot!");
  if (user.id === '205574862562000896') return message.reply("Você não pode banir o fundador do Servidor!");
  if (user.id === '724927209835593749') return message.reply("Você não pode banir ninguém com esse cargo!");
  if (user.id === '739359261741678683') return message.reply("Você não pode banir ninguém com esse cargo!");
  if (user.id === '668933129783738378') return message.reply("Você não pode banir ninguém com esse cargo!");
  if (user.id === '739603481991708672') return message.reply("Você não pode banir ninguém com esse cargo!");

  const bChannel = message.guild.channels.cache.get('670533169568546847');

  if (!user) {
    return message.reply("Você deve informar o usuário!")
  }
  if (!reason) {
    return message.reply("Informe o motivo!")
  }

  if (user) {
    message.guild.member(user).ban(reason);
    bChannel.send(`${user} Foi banido do servidor!`);
  }

}
module.exports = {
  name: "ban",
  execute,
}