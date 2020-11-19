## [#JSInTen] - Building A Discord Bot (Part 2)

### Outline

1. Project Configuration
2. Send Channel Message
3. Respond to Command
4. Conclusion

#### Project Configuration

1. Create config directory for project: _mkdir config_
2. Create config file _touch config/config.json_
3. Add the following code to config.json

```json
{
  "token": "",
  "commandPrefix": "!"
}
```

4. Update the index.js file to use the config information

```javascript
const Discord = require('discord.js');

const client = new Discord.Client();

const { token, commandPrefix } = require('./config/config.json');

client.once('ready', () => {
  console.log('LutherInsultBot is ready to insult you!');
});

// make sure this is the last of the file
client.login(token);
```

#### Send Channel Message

1. Update the ready function to send a message when bot is online

```javascript
client.once('ready', () => {
  client.channels.cache
    .get('')
    .send('Luther Insult Bot is ready to insult you!');
});
```

2. Get Channel id from Discord.

3. Run the bot _node ._ or _node index.js_

#### Respond to Commands

1. Add the following code to index.js

```javascript
client.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(commandPrefix)) return;

  const args = message.contents.split(' ');
  const command = args[0].slice(1);

  if (command.toLowerCase() === 'luther') {
    message.channel.send('How dare you! :angry:');
    //message.reply('How dare you! :angry:');
  }
});
```

## Conclusion

1. Git

> git add .
> git commit -m "part 2"
> git push -u origin master

2. You can find a link to code on GitHub below in the description of this video
3. Don't forget to like, comment, subscribe and share so can build the channel and bring you more free content.
4. What would you like to see next?
5. Like on Facebook, follow on Twitter, Parler and Instagram, and checkout the new Patreon page if you'd like to support the work that I'm doing.
6. Alright, so you all on the next one! Happy Coding!
