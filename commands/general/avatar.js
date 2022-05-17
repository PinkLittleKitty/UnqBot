const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "avatar",
    alias: [],
    description: "Muestra la foto de un usuario",
    category: "general",
    syntax: `${config.PREFIX}avatar @usuario`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            const embed = new MessageEmbed()
                .setTitle(`Avatar de ${user.user.username}`)
                .setImage(user.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
                .setColor("dd0000")
                .setFooter(`Pedido por: ${message.author.username}`, `${message.author.displayAvatarURL()}`)

            await message.channel.send({ embeds: [embed] })
        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}