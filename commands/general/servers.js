const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    //name: "servers",
    //alias: [],
    description: "Muestra los servidores de juegos que hay en la comisión",
    category: "General",
    syntax: `${config.PREFIX}servers`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            const embed = new MessageEmbed()
            .setTitle("Servidores")
        } catch {
            message.channel.send("Ha ocurrido un error!");
            console.log("ERROR command: "+ [this.name])
        }
    }
}