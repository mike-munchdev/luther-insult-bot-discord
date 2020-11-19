## [#JSInTen] - Building A Discord Bot (Part 3)

### Outline

1. Create Insults Data
2. Send Random Insult to User
3. Conclusion

#### Create Insults Data

1. Create config directory for project: _mkdir data_
2. Create insults file _touch data/insults.js_
3. Get Luther Insults - https://ergofabulous.org/luther/insult-list.php
4. Update insults.js with insults.

```javascript
module.exports = [
  'You live like simple cattle or irrational pigs and, despite the fact that the gospel has returned, have mastered the fine art of misusing all your freedom.',
  'You shameful gluttons and servants of your bellies are better suited to be swineherds and keepers of dogs.',
  'You deserve not only to be given no food to eat, but also to have the dogs set upon you and to be pelted with horse manure.',
  'Oh, what mad senseless fools you are!',
  'For this you deserve to have God deprive you of his Word and blessing and once again allow preachers of lies to arise who lead you to the devil - and wring sweat and blood out of you besides',
  'All your holiness is only stench and filth, and it merits nothing but wrath and damnation.',
  'May your grain spoil in the barn, your beer in the cellar, your cattle perish in the stall. Yes, your entire hoard ought to be consumed by rust so that you will never enjoy it.',
  "You relish and delight in the chance to stir up someone else's dirt like pigs that roll in manure and root around in it with their snouts.",
  'Your sin smells to high heaven.',
  'Your words are so foolishly and ignorantly composed that I cannot believe you understand them.',
  'You are the most insane heretics and ingrafters of heretical perversity.',
  'What you say is a blasphemy that has made you worthy of a thousand deaths.',
  'Behold, indeed, this little golden work of a golden teacher! It is a work most worthy of golden letters, and lest there be something about it which is not golden, it must be handed down by golden disciples, namely, by those about whom it is said, "The idols of the nations are silver and gold. They have eyes, but they see not."',
  'You are worthy only to be mocked by the words of error.',
  'It is presumptuous for people who are as ignorant as you are not to take up the work of a herdsman.',
  'What bilgewater of heresies has ever been spoken so heretically as what you have said?',
  'What do you mean when you say this? Are you dreaming in the throes of a fever or are you laboring under a madness?',
  'Your astute minds have been completely turned into stinking mushrooms.',
  'You are the prostitute of heretics!',
  'I am tired of the pestilent voice of your sirens.',
];
```

4. Update the index.js file to use the insults information.

```javascript
const insults = require('./data/insults');
```

#### Send Random Insult to User

1. Update the luther command to send random insult.

```javascript
if (command.toLowerCase() === 'luther') {
  message.reply(insults[Math.floor(Math.random() * insults.length)]);
}
```

2. Run bot and check for insults!

## Conclusion

1. Git

> git add .
> git commit -m "part 3"
> git push -u origin master

2. You can find a link to code on GitHub below in the description of this video
3. Don't forget to like, comment, subscribe and share so can build the channel and bring you more free content.
4. What would you like to see next?
5. Like on Facebook, follow on Twitter, Parler and Instagram, and checkout the new Patreon page if you'd like to support the work that I'm doing.
6. Alright, so you all on the next one! Happy Coding!
