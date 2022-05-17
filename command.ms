const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "",
    alias: [],
    description: "",
    category: "",
    syntax: `${config.PREFIX}`,
    permissions: [""],

    async execute (Client, message, args) {
        try {

        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}