const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "setembed",
    alias: [],
    description: "Crea un embed personalizado",
    category: "Administración",
    syntax: `${config.PREFIX}setembed title|description|image|footer|color`,
    permissions: ["ADMINISTRATOR"],

    async execute (Client, message, args) {
        try {
            const opt = args.join(' ').split('|')

            let embed = new MessageEmbed()
                .setTitle(`${opt[0]}`)
                .setDescription(`${opt[1]}`)
                .setImage(opt[2])
                .setFooter({text: `${opt[3]}`})
                .setColor(opt[4])

            message.channel.send({embeds: [embed]})

        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}