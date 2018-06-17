const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("ready", () => {
    client.user.setGame("with my code");
});

const prefix = "h!";
client.on("message", (message) => {
  // Exit and stop if it's not there
  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
  if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

client.login(config.token);
