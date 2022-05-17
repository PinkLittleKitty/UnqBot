const { MessageEmbed, Client, Message } = require("discord.js")
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "userinfo",
    alias: [],
    description: "Muestra información sobre un usuario",
    category: "general",
    syntax: `${config.PREFIX}userinfo @usuario`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

            let estados = {
                "online": "🟢 En Línea",
                "idle": "🟠 Ausente",
                "dnd": "🔴 No molestar",
                "offline": "⚫️ Desconectado/invisible"
            };

            function formatDate (template, date) {
                var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
                date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
                return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
                    return template.split(specs[i]).join(item)
                }, template)
            }

            let badges1 = {
        
                'EARLY_SUPPORTER': '<:Earlysupporter:746029762274656317>',
                'DISCORD_EMPLOYEE': '<:Discordstaff:746029762513862666>',
                'DISCORD_PARTNER': '<:Discordpartner:746029762564194355>',
                'HYPESQUAD_EVENTS': '<:HypesquadEvents:746029762497085550>',
                'HOUSE_BRAVERY': '<:Houseofbravery:746029762459467858>',
                'HOUSE_BRILLIANCE': '<:Houseofbrilliance:746029762610331668>',
                'BUGHUNTER_LEVEL_1': '<:Bughunter:746029762522120203>',
                'BUGHUNTER_LEVEL_2': '<:Goldbughunter:746029762526576691>',
                'VERIFIED_DEVELOPER': '<:VerifiedBotDeveloper:746029762194964590>',
                'HOUSE_BALANCE': '<:Houseofbalance:746029762610331658>',
                'VERIFIED_BOT': '<:verified:753442204541911081>',
            }

            let obj = {
                "HOUSE_BRAVERY" : "Bravery" , 
                "VERIFIED_BOT" : "Bot verificado" , 
                "VWERIFIED_DEVELOPER" : "Desarrollador de bots verificado" , 
                "HOUSE_BRILLIANCE" : "Brilliance" , 
                "DISCORD_PARTNER" : "Socio de discord"
            }

            const embed = new MessageEmbed()
                .setTitle(`Información de ${user.user.username}`) 
                .setThumbnail (user.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))
                .addField("**Nombre**:", "**" + `${user.user.tag}` + "**")
                .addField("**ID**:", `${user.user.id}` )
                .addField("**Apodo del usuario**:", `${user.nickname !== null ? `${user.nickname}` : 'Ninguno'}`, true)
                .addField("**Ingresó al Servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', user.joinedAt))
                .addField("**Cuenta Creada:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', user.user.createdAt))
                //.addField("**Insignias:**", user.user.flags.toArray().length ? user.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tiene badges")
                //.addField("**Jugando**:", user.user.presence.game != null ? user.presence.game.name : "Nada", true)
                .addField("**Roles:**", user.roles.cache.map(roles => `\`${roles.name}\``).join(', '))
                //.addField("**Estado**:", "**" + estados[user.user.presence.status] + "**")
                .addField("**¿Boostea?**:", user.premiumSince ? '**Está boosteando**' : '**No está boosteando**')
                .setColor("dd0000")
                .setFooter(`Pedido por: ${message.author.username}`, `${message.author.displayAvatarURL()}`)


            await message.channel.send({ embeds: [embed] })

        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
    }
}