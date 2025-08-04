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
  if (sentMessage.author.bot) return;

  console.log(sentMessage.content);
  if (sentMessage.author.username === usernameForDeletion) {
    setTimeout(() => {
      sentMessage.delete();
    }, 5000);
  } else if (sentMessage.author.username === "matikorba") {
    sentMessage.reply("jo dik");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  if (interaction.commandName === "hey") {
    interaction.reply("hey!");
  }
});

client.login(process.env.TOKEN);

