const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");
const marsnpm = require("marsnpm")

module.exports = {
    name: "",
    alias: [],
    description: "",
    category: "Interacciones",
    syntax: `${config.PREFIX}kill @usuario`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            if(user === message.author) return message.channel.send("No puedes mencionarte a ti mismo")
            if(!user) return message.channel.send("Debes mencionar a un usuario")

            let url = [
                "",
                ""
            ]
            let image = url[Math.floor(Math.random() * url.length)];

            let embed = new MessageEmbed() 
                .setTitle(`${message.author.username} mató a ${user.user.username}`)
                .setImage(`${image}`)
                .setColor('DD0000')
            message.channel.send({embeds:[embed]})

        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}