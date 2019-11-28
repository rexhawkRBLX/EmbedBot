const Discord = require("discord.js");
const bot = new Discord.Client();
const token = process.env.token();

bot.login(token);

bot.on("ready", () => {
    console.log("Ready");
});

bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
        msg.channel.send('pong');
    }
});