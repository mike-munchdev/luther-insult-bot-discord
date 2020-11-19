const Discord = require('discord.js');

const client = new Discord.Client();
const { token, commandPrefix } = require('./config/config.json');

client.once('ready', () => {
  client.channels.cache
    .get('777281706137878551')
    .send('Luther Insult Bot is ready to insult you!');
});

client.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(commandPrefix)) return;

  const args = message.content.split(' ');
  const command = args[0].slice(commandPrefix.length);

  if (command.toLowerCase() === 'luther') {
    message.reply('How dare you! :angry:');
  }
});

// make sure this is the last of the file
client.login(token);
