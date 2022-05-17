const { MessageEmbed, Client, Message, DiscordAPIError } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "help",
    alias: ["ayuda"],
    description: "Muestra una lista de los comandos disponibles.",
    category: "general",
    syntax: `${config.PREFIX}help`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            
        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}