const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content.toLowerCase() === 'ping') {
        message.channel.send('Your message has been processed.');
        }
    if (message.content.toLowerCase() === 'tomo is gay') {
        message.channel.send('According to my diagnosis, that is correct.');
        }
   if (message.content.toLowerCase() === 'i love huian') {
        message.channel.send('Flattered.');
        }
   if (message.content.toLowerCase() === 'how flattered?') {
       message.channel.send('That is for me to know.');
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
