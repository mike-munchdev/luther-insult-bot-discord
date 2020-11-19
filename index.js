const Discord = require('discord.js');

const client = new Discord.Client();

client.once('ready', () => {
  console.log('LutherInsultBot is ready to insult you!');
});

// make sure this is the last of the file
client.login('Nzc5MDcyMjA5MTkyMzUzNzkz.X7bNiQ.scI4XGkQ9LYcWGKnVOaQsC2wXuI');
