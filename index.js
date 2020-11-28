if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const Discord = require('discord.js');

const client = new Discord.Client();
const { TOKEN, COMMAND_PREFIX } = process.env;

const insults = require('./data/insults');

client.once('ready', () => {
  console.log('Luther Insult Bot is ready to insult you!');
});

client.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(COMMAND_PREFIX)) return;

  const args = message.content.split(' ');
  const command = args[0].slice(COMMAND_PREFIX.length);

  if (command.toLowerCase() === 'luther') {
    message.reply(insults[Math.floor(Math.random() * insults.length)]);
  }
});

// make sure this is the last of the file
client.login(TOKEN);
