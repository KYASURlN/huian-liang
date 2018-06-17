const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs")

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => {
    client.user.setGame("with my code");
});

const prefix = "h!";
client.on("message", (message) => {
    if(message.author.id !== config.ownerID) return;
    if (!message.content.startsWith(prefix)) return;
    
    if(message.content.startsWith(config.prefix + "prefix")) {
  let newPrefix = message.content.split(" ").slice(1, 2)[0];
  config.prefix = newPrefix;
  fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);

    if (message.content.startsWith(prefix + "ping")) {
        message.channel.send("pong!");
        } else
    if (message.content.startsWith(prefix + "foo")) {
        message.channel.send("bar!");
        
}
});

client.login(config.token);
