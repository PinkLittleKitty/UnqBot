const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "cry",
    alias: [],
    description: "",
    category: "Interacciones",
    syntax: `${config.PREFIX}cry`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            let url = [
                "https://media.discordapp.net/attachments/873681667863244840/873681916849696828/cry-1.gif?width=380&height=214",
                "https://media.discordapp.net/attachments/873681667863244840/873681925661925446/cry-2.gif?width=448&height=249",
                "https://media.discordapp.net/attachments/873681667863244840/873681944116879390/cry-3.gif?width=450&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681720745000970/cry-4.gif?width=449&height=255",
                "https://media.discordapp.net/attachments/873681667863244840/873681725715259402/cry-5.gif?width=450&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681727007113236/cry-6.gif?width=432&height=241",
                "https://media.discordapp.net/attachments/873681667863244840/873681729985085491/cry-7.gif?width=450&height=211",
                "https://media.discordapp.net/attachments/873681667863244840/873681738612736080/cry-8.gif?width=486&height=270",
                "https://media.discordapp.net/attachments/873681667863244840/873681736905683004/cry-9.gif?width=450&height=247",
                "https://media.discordapp.net/attachments/873681667863244840/873681742182109224/cry-10.gif?width=450&height=255",
                "https://media.discordapp.net/attachments/873681667863244840/873681749064974356/cry-11.gif?width=360&height=202",
                "https://media.discordapp.net/attachments/873681667863244840/873681751996784731/cry-12.gif?width=450&height=180",
                "https://media.discordapp.net/attachments/873681667863244840/873681753238290492/cry-13.gif?width=450&height=251",
                "https://media.discordapp.net/attachments/873681667863244840/873681773463207946/cry-14.gif?width=446&height=251",
                "https://media.discordapp.net/attachments/873681667863244840/873685397572558848/cry-15.gif?width=450&height=255",
                "https://media.discordapp.net/attachments/873681667863244840/873681764005052457/cry-16.gif?width=360&height=193",
                "https://media.discordapp.net/attachments/873681667863244840/873681788764028949/cry-17.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873681667863244840/873681785320509460/cry-18.gif?width=432&height=208",
                "https://media.discordapp.net/attachments/873681667863244840/873681785723170817/cry-19.gif?width=288&height=160",
                "https://media.discordapp.net/attachments/873681667863244840/873681789833592855/cry-20.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/873681667863244840/873681794145320990/cry-21.gif?width=450&height=255",
                "https://media.discordapp.net/attachments/873681667863244840/873681797177835590/cry-22.gif?width=450&height=218",
                "https://media.discordapp.net/attachments/873681667863244840/873681805335724072/cry-23.gif?width=448&height=249",
                "https://media.discordapp.net/attachments/873681667863244840/873681802412310528/cry-24.gif?width=358&height=319",
                "https://media.discordapp.net/attachments/873681667863244840/873681807319658567/cry-25.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873681667863244840/873681811866288148/cry-26.gif?width=441&height=258",
                "https://media.discordapp.net/attachments/873681667863244840/873681811329384518/cry-27.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873681667863244840/873681821978722385/cry-28.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681820716261426/cry-29.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681830921003018/cry-30.gif?width=448&height=241",
                "https://media.discordapp.net/attachments/873681667863244840/873681827179659274/cry-31.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681830656737310/cry-32.gif?width=374&height=434",
                "https://media.discordapp.net/attachments/873681667863244840/873681838672060416/cry-33.gif?width=448&height=430",
                "https://media.discordapp.net/attachments/873681667863244840/873681840098127893/cry-34.gif?width=419&height=433",
                "https://media.discordapp.net/attachments/873681667863244840/873681851204636682/cry-35.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681859505168454/cry-36.gif?width=448&height=233",
                "https://media.discordapp.net/attachments/873681667863244840/873681852236460042/cry-37.gif?width=448&height=336",
                //"",
                "https://media.discordapp.net/attachments/873681667863244840/873681866824224789/cry-39.gif?width=448&height=222",
                "https://media.discordapp.net/attachments/873681667863244840/873681867281399868/cry-40.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681871643504710/cry-41.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/873681667863244840/873681888265502750/cry-42.gif?width=448&height=358",
                "https://media.discordapp.net/attachments/873681667863244840/873681886956888114/cry-43.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681895559426118/cry-44.gif?width=448&height=220",
                "https://media.discordapp.net/attachments/873681667863244840/873681892392726600/cry-45.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/873681667863244840/873681896008187964/cry-46.gif?width=576&height=324",
                "https://media.discordapp.net/attachments/873681667863244840/873681899900534795/cry-47.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873681667863244840/873681895110606868/cry-48.gif?width=360&height=270",
                "https://media.discordapp.net/attachments/873681667863244840/873681900252823582/cry-49.gif?width=461&height=259",
                "https://media.discordapp.net/attachments/873681667863244840/873681905734783016/cry-50.gif?width=270&height=201",
                "https://media.discordapp.net/attachments/873681667863244840/873681907198619728/cry-51.gif?width=546&height=434",
                "https://media.discordapp.net/attachments/873681667863244840/873681910151393310/cry-52.gif?width=270&height=180"
            ]

            let image = Math.floor(Math.random() * url.length);
            
            const embed1 = new MessageEmbed()
            .setTitle(`${user.user.username} hizo llorar a ${message.author.username}`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            const embed2 = new MessageEmbed()
            .setTitle(`${message.author.username} se puso a llorar`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            const embed3 = new MessageEmbed()
            .setTitle(`${message.author.username}, estas tiste?`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            let options = [
                embed1
            ]
            let options2 = [
                embed2,
                embed3
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