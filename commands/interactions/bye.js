const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "bye",
    alias: ["chau"],
    description: "",
    category: "Interacciones",
    syntax: `${config.PREFIX}bye`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {

            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            let url = [
                "https://media.discordapp.net/attachments/873315500187324447/873328991971454986/bye-1.gif?width=423&height=211",
                "https://media.discordapp.net/attachments/873315500187324447/873328992000831518/bye-2.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873315500187324447/873328996375474206/bye-3.gif?width=432&height=243",
                "https://media.discordapp.net/attachments/873315500187324447/873328997734445176/bye-4.gif?width=414&height=234",
                "https://media.discordapp.net/attachments/873315500187324447/873329002855690240/bye-5.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873315500187324447/873338410155266098/bye-6.gif?width=394&height=434",
                "https://media.discordapp.net/attachments/873315500187324447/873329006131417128/bye-7.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873315500187324447/873329011189776454/bye-8.gif?width=406&height=434",
                //"",
                "https://media.discordapp.net/attachments/873315500187324447/873329017485422632/bye-10.gif?width=288&height=148",
                "https://media.discordapp.net/attachments/873315500187324447/873339912324276274/bye-11.gif?width=448&height=215",
                "https://media.discordapp.net/attachments/873315500187324447/873329036909223946/bye-12.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873338392799240192/bye-13.gif?width=576&height=324",
                "https://media.discordapp.net/attachments/873315500187324447/873329039245463612/bye-14.gif?width=261&height=265",
                "https://media.discordapp.net/attachments/873315500187324447/873329039887204422/bye-15.gif?width=432&height=243",
                "https://media.discordapp.net/attachments/873315500187324447/873329041942392892/bye-16.gif?width=448&height=280",
                "https://media.discordapp.net/attachments/873315500187324447/873329048435187732/bye-17.gif?width=288&height=216",
                "https://media.discordapp.net/attachments/873315500187324447/873329054810533928/bye-18.gif?width=448&height=245",
                "https://media.discordapp.net/attachments/873315500187324447/873329055339008010/bye-19.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/873315500187324447/873329060946771989/bye-20.gif?width=383&height=434",
                "https://media.discordapp.net/attachments/873315500187324447/873334044346163210/bye-21.gif?width=432&height=243",
                "https://media.discordapp.net/attachments/873315500187324447/873329081511465010/bye-22.gif?width=448&height=252",
                //"",
                "https://media.discordapp.net/attachments/873315500187324447/873329087953907792/bye-24.gif?width=448&height=292",
                "https://media.discordapp.net/attachments/873315500187324447/873329089602289714/bye-25.gif?width=576&height=324",
                "https://media.discordapp.net/attachments/873315500187324447/873329095843397692/bye-26.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873329097177178142/bye-27.gif?width=450&height=243",
                "https://media.discordapp.net/attachments/873315500187324447/873329102403272745/bye-28.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873329104106168330/bye-29.gif?width=322&height=433",
                "https://media.discordapp.net/attachments/873315500187324447/873329126117871616/bye-30.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873329126033981450/bye-31.gif?width=448&height=285",
                "https://media.discordapp.net/attachments/873315500187324447/873334020270854174/bye-32.gif?width=448&height=336",
                "https://media.discordapp.net/attachments/873315500187324447/873333978726273034/bye-33.gif?width=448&height=250",
                //"",
                //"",
                //"",
                //"",
                "https://media.discordapp.net/attachments/873315500187324447/873329142945439744/bye-38.gif?width=351&height=434",
                "https://media.discordapp.net/attachments/873315500187324447/873382655931060244/bye-39.gif?width=574&height=326",
                "https://media.discordapp.net/attachments/873315500187324447/873393031087284294/bye-40.gif?width=450&height=418",
                "https://media.discordapp.net/attachments/873315500187324447/873351313730183208/bye-41.gif?width=450&height=337",
                //"",
                //"",
                //"",
                "https://media.discordapp.net/attachments/873315500187324447/873391447087411260/bye-45.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/873315500187324447/873351811589894235/bye-46.gif?width=469&height=434",
                "https://media.discordapp.net/attachments/873315500187324447/873392057505427477/bye-47.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873333989593714728/bye-48.gif?width=415&height=434",
                "https://media.discordapp.net/attachments/873315500187324447/873337599912185896/bye-49.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873336247513391164/bye-50.gif?width=448&height=250",
                "https://media.discordapp.net/attachments/873315500187324447/873382778773856306/bye-51.gif?width=448&height=404",
                "https://media.discordapp.net/attachments/873315500187324447/873337162257543228/bye-52.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873329148163149824/bye-53.gif?width=450&height=253",
                "https://media.discordapp.net/attachments/873315500187324447/873329152281935902/bye-54.gif?width=576&height=322",
                "https://media.discordapp.net/attachments/873315500187324447/873329149941514260/bye-55.gif?width=448&height=252",
                "https://media.discordapp.net/attachments/873315500187324447/873337144595345428/bye-56.gif?width=400&height=434",
                "https://media.discordapp.net/attachments/873315500187324447/873329152114167848/bye-57.gif?width=448&height=204"
            ]

            let image = Math.floor(Math.random() * url.length);
            
            const embed1 = new MessageEmbed()
            .setTitle(`${message.author.username} le dijo adios a ${user.user.username}`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            const embed2 = new MessageEmbed()
            .setTitle(`${message.author.username} se despide de ${user.user.username}`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            const embed3 = new MessageEmbed()
            .setTitle(`${message.author.username} se despide`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            const embed4 = new MessageEmbed()
            .setTitle(`${message.author.username}: Adioos!`)
            .setImage(`${url[image]}`)
            .setColor("DD0000")

            let options = [
                embed1,
                embed2
            ]
            let options2 = [
                embed3,
                embed4
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