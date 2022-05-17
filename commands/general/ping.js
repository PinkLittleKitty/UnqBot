const { MessageEmbed, Client, Message } = require("discord.js")
const fs = require("fs");
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "ping",
    alias: [],
    description: "Muestra la latencia de un mensaje",
    category: "General",
    syntax: `${config.PREFIX}ping`,
    permissions: ["SEND_MESSAGES"],

    execute (Client, message, args) {
        try {    
            const timeTaken = Date.now() - message.createdTimestamp;
            message.reply(`Pong! Este mensaje tiene una latencia de ${timeTaken}ms.`);
        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}