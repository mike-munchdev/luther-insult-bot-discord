## [#JSInTen] - Building A Discord Bot (Part 4)

### Outline

1. Create Heroku App
2. Update Code To Use Environment Variables
3. Configure Heroku App As Worker
4. Set Automatic Deployment in Heroku
5. Create Environment Variables in Heroku
6. Start the Worker Dyno
7. Push Changes to GitHub
8. Conclusion

#### Create Heroku App

1. Sign up for Heroku - https://heroku.com/
2. Install Heroku CLI - https://toolbelt.heroku.com/
3. Go to your dashboard - https://dashboard.heroku.com/apps
4. Click "Create New App"
5. Name your app
6. Click "Create app"

#### Update Code To Use Environment Variables

1. Install dotenv - _npm i --save-dev dotenv_
2. Create .env in root of our project - _touch .env_
3. Add the following code to .env file

```
  COMMAND_PREFIX=!
  TOKEN=
```

4. Update the index.js file to use dotenv

```javascript
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
```

5. Delete config directory - _rm -rf config_

#### Configure Heroku App As Worker

1. Create Procfile - _touch Procfile_
2. Add the following code to Procfile

```
  worker: node index.js
```

#### Set Automatic Deployment in Heroku

1. Navigate to Heroku App Dashboard
2. Select _Deploy_ Tab
3. Select _GitHub_ under "Deployment Method"
4. Connect to your GitHub repository
5. Under "Automatic deploys" select the "master" branch
6. Click "Enable Automatic Deploys"

#### Create Environment Variables in Heroku

1. Navigate to Heroku App Dashboard
2. Select _Settings_ tab
3. Click _Reveal Config Vars_
4. Add the following config vars
   COMMAND_PREFIX=!
   TOKEN=[your_token]

#### Push Changes to GitHub

Update .gitignore

```
  .env
```

> git add .
> git commit -m "part 4"
> git push -u origin master

#### Start the Worker Dyno

1. Navigate to Heroku App Dashboard
2. Select _Resources_ tab
3. Enable the _worker_ dyno

## Conclusion

1. You can find a link to code on GitHub below in the description of this video
2. Don't forget to like, comment, subscribe and share so can build the channel and bring you more free content.
3. What would you like to see next?
4. Like on Facebook, follow on Twitter, Parler and Instagram, and checkout the new Patreon page if you'd like to support the work that I'm doing.
5. Alright, so you all on the next one! Happy Coding!
