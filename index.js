const Discord = require("discord.js");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const Leggie = new Discord.Client()
Leggie.commands = new Discord.Collection();
Leggie.queues = new Map();

const commandFiles = fs.readdirSync(path.join(__dirname, "commands")).filter(file => file.endsWith(".js"));

const folders = fs.readdirSync(path.join(__dirname, "/commands"))
for (var folder of folders) {
    const files = fs.readdirSync(path.join(__dirname, "/commands", folder)).filter((filename) => /^.*\.(t|j)s$/.test(filename))
    for (var filename of files) {
        const command = require(`./commands/${folder}/${filename}`);
        Leggie.commands.set(command.name, command);
    }
}

for (const file of commandFiles) {
    const command = require(path.join(__dirname, "commands", `${file}`));
    Leggie.commands.set(command.name, command);
}
console.log(Leggie.commands);

Leggie.on('ready', () => {
    let activities = [
        `https://discord.gg/Ydfpy2B`
    ]
    i = 0;
    setInterval(() => Leggie.user.setActivity(`${activities[i++ %
        activities.length]}`, {
        type: "PLAYING"
    }), 1000 * 60 ); 

    console.log(`▲──────◇◆◇────────────◇◆◇──────▲
    O ${Leggie.user.username} está online!
▲──────◇◆◇────────────◇◆◇──────▲`)
});

Leggie.on("guildMemberAdd", async (member) => {

    let channel = Leggie.channels.cache.get("594042425673252864"); 
    let emoji1 = member.guild.emojis.cache.find(emoji => emoji.name === 'lolli');
    let emoji2 = member.guild.emojis.cache.find(emoji => emoji.name === 'welcome');
    let emoji3 = member.guild.emojis.cache.find(emoji => emoji.name === 'seta');

    let enviar1 = `${emoji1} ${emoji2} ${member.user} Seja bem vindo ao ${member.guild.name}
    ${emoji3} Leia as regras do servidor para evitar ser punido <#642772690301747230>`
    await channel.send(enviar1)
})
Leggie.on("guildMemberRemove", async (member) => {

    let channel = Leggie.channels.cache.get("663986345168994324"); 
    let emoji4 = member.guild.emojis.cache.find(emoji => emoji.name === 'kawaii');

    let enviar2 = `${emoji4} ${member.user} Saiu do servidor 😭`

    await channel.send(enviar2)
})

Leggie.on('message', (message) => {
    if (!message.content.toLowerCase().startsWith(process.env.BOT_PREFIX) || message.author.Leggie || message.channel.type == "dm") return;

    const args = message.content.toLowerCase().slice(process.env.BOT_PREFIX.length).split(" ");
    const command = args.shift();
    try {
        Leggie.commands.get(command).execute(Leggie, message, args);
    } catch (e) {
        return message.reply("não reconheço este comando 😭");
    }
})

Leggie.login(process.env.BOT_TOKEN);