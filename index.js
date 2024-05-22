const { Client, IntentsBitField } = require("discord.js");
require("dotenv").config();

let usernameForDeletion = "Bongo";

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is running`);
});

client.on("messageCreate", (sentMessage) => {
  console.log(sentMessage.content);
  if (sentMessage.author.username === usernameForDeletion) {
    setTimeout(() => {
      sentMessage.delete();
    }, 5000);
  } else if (sentMessage.author.username === "MEE6") {
    sentMessage.reply("jo dik");
  }
});

client.login(process.env.TOKEN);
