const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "hello",
    alias: ["hi"],
    description: "",
    category: "Interacciones",
    syntax: `${config.PREFIX}hi @usuario`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])

            if(user === message.author) return message.channel.send("No puedes mencionarte a ti mismo")
            if(!user) return message.channel.send("Debes mencionar a un usuario")

            let url = [
                "https://media.discordapp.net/attachments/868266045448794152/873344016421380096/hi-1.gif?width=448&height=257",
                "https://media.discordapp.net/attachments/868266045448794152/873344018505957386/hi-2.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/868266045448794152/873344026466713691/hi-3.gif?width=282&height=180",
                "https://media.discordapp.net/attachments/868266045448794152/873344030677827614/hi-4.gif?width=450&height=220",
                "https://media.discordapp.net/attachments/868266045448794152/873344033991311370/hi-5.gif?width=450&height=220",
                "https://media.discordapp.net/attachments/868266045448794152/873344040832204831/hi-6.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/868266045448794152/873344052102332426/hi-7.gif?width=360&height=180",
                "https://media.discordapp.net/attachments/868266045448794152/873346434190176306/hi-8.gif?width=486&height=273",
                "https://media.discordapp.net/attachments/868266045448794152/873344092082417674/hi-9.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/868266045448794152/873344130380628108/hi-10.gif?width=360&height=266",
                "https://media.discordapp.net/attachments/868266045448794152/873344091860123728/hi-11.gif?width=506&height=379",
                "https://media.discordapp.net/attachments/868266045448794152/873344081621843999/hi-12.gif?width=199&height=270",
                "https://media.discordapp.net/attachments/868266045448794152/873344083953868820/hi-13.gif?width=360&height=202",
                "https://media.discordapp.net/attachments/868266045448794152/873344088886349844/hi-14.gif?width=448&height=379",
                "https://media.discordapp.net/attachments/868266045448794152/873344091960803388/hi-15.gif?width=448&height=248",
                "https://media.discordapp.net/attachments/868266045448794152/873344092279550052/hi-16.gif?width=542&height=434",
                "https://media.discordapp.net/attachments/868266045448794152/873344099145633883/hi-17.gif?width=448&height=336",
                "https://media.discordapp.net/attachments/868266045448794152/873344104518549534/hi-18.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/868266045448794152/873344100722688030/hi-19.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/868266045448794152/873344124655390720/hi-20.gif?width=432&height=243",
                "https://media.discordapp.net/attachments/868266045448794152/873344131840229426/hi-21.gif?width=432&height=288",
                "https://media.discordapp.net/attachments/868266045448794152/873344135510229032/hi-22.gif?width=448&height=349",
                "https://media.discordapp.net/attachments/868266045448794152/873344137271869510/hi-23.gif?width=448&height=380",
                "https://media.discordapp.net/attachments/868266045448794152/873344140019138640/hi-24.gif?width=450&height=254",
                "https://media.discordapp.net/attachments/868266045448794152/873344142573449237/hi-25.gif?width=450&height=421",
                "https://media.discordapp.net/attachments/868266045448794152/873344151884808242/hi-26.gif?width=408&height=434",
                "https://media.discordapp.net/attachments/868266045448794152/873344152224559144/hi-27.gif?width=448&height=254",
                "https://media.discordapp.net/attachments/868266045448794152/873344152719478856/hi-28.gif?width=450&height=248",
                "https://media.discordapp.net/attachments/868266045448794152/873346537521041418/hi-29.gif?width=450&height=255",
                "https://media.discordapp.net/attachments/868266045448794152/873344171447029870/hi-30.gif?width=450&height=249",
                "https://media.discordapp.net/attachments/868266045448794152/873344173208653854/hi-31.gif?width=450&height=337",
                "https://media.discordapp.net/attachments/868266045448794152/873344178506047578/hi-32.gif?width=448&height=247",
                "https://media.discordapp.net/attachments/868266045448794152/873344180691271690/hi-33.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/868266045448794152/873344187200831519/hi-34.gif?width=450&height=252",
                "https://media.discordapp.net/attachments/868266045448794152/873344188211679242/hi-35.gif?width=306&height=173",
                "https://media.discordapp.net/attachments/868266045448794152/873347107451449354/hi-36.gif?width=288&height=216",
                "https://media.discordapp.net/attachments/868266045448794152/873347460989321286/hi-37.gif?width=356&height=434",
                "https://media.discordapp.net/attachments/868266045448794152/873344209137049630/hi-38.gif?width=479&height=434",
                "https://media.discordapp.net/attachments/868266045448794152/873344196747079690/hi-39.gif?width=320&height=180",
                "https://media.discordapp.net/attachments/868266045448794152/873344218016411698/hi-40.gif?width=432&height=243",
                "https://media.discordapp.net/attachments/868266045448794152/873344207501283328/hi-41.gif?width=432&height=434",
                "https://media.discordapp.net/attachments/868266045448794152/873344226497269810/hi-42.gif?width=400&height=225",
                "https://media.discordapp.net/attachments/868266045448794152/873344213352329236/hi-43.gif?width=241&height=241",
                "https://media.discordapp.net/attachments/868266045448794152/873344215877292042/hi-44.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/868266045448794152/873344226291744828/hi-45.gif?width=448&height=248",
                "https://media.discordapp.net/attachments/868266045448794152/873347846072598538/hi-46.gif?width=288&height=288",
                "https://media.discordapp.net/attachments/868266045448794152/873344231777906688/hi-47.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/868266045448794152/873344229580103690/hi-48.gif?width=406&height=434",
                "https://media.discordapp.net/attachments/868266045448794152/873348089266700379/hi-49.gif?width=450&height=337",
                "https://media.discordapp.net/attachments/868266045448794152/873348436496367626/hi-50.gif?width=288&height=142",
                "https://media.discordapp.net/attachments/868266045448794152/873348884020232252/hi-51.jpg?width=271&height=150",
                "https://media.discordapp.net/attachments/868266045448794152/873349419188244500/hi-52.gif?width=288&height=161"
            ]

            let image = Math.floor(Math.random() * url.length);

            const embed = new MessageEmbed()
            .setTitle(`${message.author.username} saludó a ${user.user.username}`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            message.channel.send({ embeds: [embed] })

        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}