const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "horoscopo",
    alias: ["hp"],
    description: "",
    category: "Juegos",
    syntax: `${config.PREFIX}horoscopo signo`,
    permissions: ["SEND_MESSAGE"],

    async execute (Client, message, args) {
        try {
            if(!args[0]) return message.channel.send("Debes indicar tu signo zodiacal")
  
            let Options = ["libra", "tauro", "cancér", "capricornio", "sagitario", "géminis", "piscis", "leo", "aries", "virgo", "escorpio", "acuario", "cancer", "geminis"]
            
            if(!Options.includes(args[0].toLowerCase())) return message.channel.send("Debes ingresar un signo zodiacal")
        
            let author = message.author.username;
            let love = Math.floor(Math.random() * 100)
            let money = Math.floor(Math.random() * 100)
            let health = Math.floor(Math.random() * 100)
            let lucky = Math.floor(Math.random() * 100)
        
            const embed = new MessageEmbed()
                .setTitle("El horóscopo de " + `${author}` + " es:")
                .addField(`❤️ Amor: `, `${love}%`)
                .addField(`🤑 Dinero: `, `${money}%`)
                .addField(`⚕️ Salud: `, `${health}%`)
                .addField(`🍀 Suerte: `, `${lucky}%`)
                .setColor("DD0000");
            
            message.channel.send({ embeds: [embed] })
        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
            
    }
}