## [#JSInTen] - Building A Discord Bot (Part 1)

#### Technologies Used

1. **Node** - https://nodejs.org/
2. **Discord.js** - https://www.npmjs.com/package/discord.js

### Outline

1. Basic Setup
2. Connect to Discord
3. Bring Bot Online
4. Conclusion

#### Basic Setup

1. Create directory for project: _mdkir luther-insult-bot-discord_
2. Navigate into that directory: _cd luther-insult-bot-discord_
3. Create outline file _touch outline.md_
4. Open VSCode _code ._
5. Open VSCode Terminal _Ctrl-`_
6. Bring in outline contents and preview (Markdown Preview Enhanced Plugin) _Cmd-K, V_
7. Create npm package: _npm init --y_
8. Install Dependencies: _npm i discord.js_

#### Connect to Discord

1. Create index.js: _touch index.js_
2. Add the following code to index.js

```javascript
const Discord = require('discord.js');

const client = new Discord.Client();
```

3. Create application - https://discord.com/developers/applications
4. Get clientID
5. Convert to bot
6. Get Bot Token
7. Calculate bot permissions - https://discordapi.com/permissions.html
8. Use generated link to add you bot to your server.
9. Copy access token
10. Add the following code to index.js

```javascript
client.once('ready', () => {
  console.log('LutherInsultBot is ready to insult you!');
})
client.login(<token>); // make sure this is the last of the file
```

11. Run the bot _node ._ or _node index.js_

## Conclusion

1. Git

- echo "# luther-insult-bot-discord" >> README.md
- git init
- git add .
- git commit -m "first commit"
- git remote add origin https://github.com/mike-munchdev/luther-insult-bot-discord.git
- git push -u origin master

2. You can find a link to code on GitHub below in the description of this video
3. Don't forget to like, comment, subscribe and share so we can keep bring you this free content.
4. What would you like to see next?
5. Alright, so you all on the next one! Happy Coding!
