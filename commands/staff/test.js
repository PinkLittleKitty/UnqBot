const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "test",
    alias: [],
    description: "",
    category: "Administración",
    syntax: `${config.PREFIX}test`,
    permissions: [],

    async execute (Client, message, args) {
        if (message.author.id !== '720346970874576978') return;
  
        Client.emit("guildMemberAdd", message.member || (await message.guild.fetchMember(message.author)));
    }
}