const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "",
    alias: [],
    description: "",
    category: "Interacciones",
    syntax: `${config.PREFIX}`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            
            if(user === message.author) return message.channel.send("No puedes mencionarte a ti mismo")
            if(!user) return message.channel.send("Debes mencionar a un usuario")

            let url = [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                ""
            ]

            let image = Math.floor(Math.random() * url.length);
            
            const embed1 = new MessageEmbed()
            .setAuthor(``)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            let options = [
            ]
            let options2 = [
            ]
            
            let response = Math.floor(Math.random() * options.length);
            let response2 = Math.floor(Math.random() * options2.length);

            if(user === message.member) {
                message.channel.send({ embeds: [ options2[response2] ] })
            } else {
                message.channel.send({ embeds: [ options[response] ] })
            }

        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}