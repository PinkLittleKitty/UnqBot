const CloudlyAPI = require("@cloudlyteam/cloudlyapi.js");
const { MessageEmbed, Client, Message } = require("discord.js")
const { getSteamGame } = CloudlyAPI;
const config = require("C:/Users/Lucas/Desktop/Bot UNQ/config.json");

module.exports = {
    name: "steam",
    alias: [],
    description: "",
    category: "General",
    syntax: `${config.PREFIX}steam id`,
    permissions: ["SEND_MESSAGES"],

    async execute (Client, message, args) {
        try {
            // Vemos si los argumentos son igual a un número, y buscamos por ID.
            if(parseInt(args.join("")) && !isNaN(args.join(""))){
        
            // Si pasa esto, es porque el texto sólo incluye números
            
            // Usamos el método 'id' para buscar juegos por ID.
                getSteamGame.id(args.join(""), (err, data) => {
        
                // Si ocurre un error, envía un mensaje y logea 
                // el error completo en la consola.
        
                    if(err) {
                        console.log(err);
                        return message.channel.send("Ha ocurrido un error. Detalles: "+err.message);
                    }
            
                    let randomImage = Math.floor(Math.random() * data.screenshots.length);

                    const gameInfo = new MessageEmbed()
                    .setColor("AQUA")
                    .setTitle(`${data.name}`)
                    .setDescription(`${data.short_description}`)
                    .setThumbnail(`${data.icon}`)
                    //.setImage(`${data.screenshots[randomImage]}`)
                    .addField("Plataformas", `${data.platforms}`)
                    .addField("Precio", `${data.price ? data.price.final + data.price.currency : 'Gratis'}`)
                    .addField("Categorías", `${data.categories.map(cate => `\`${cate}\``).join(', ')}`)
                    .addField("Géneros", data.genres.map(gen => `\`${gen}\``).join(', '))
                    .addField("Desarrollado por", data.developers.map(dev => `\`${dev}\``).join(', '))
                    .addField("Publicado por", data.publishers.map(pub => `\`${pub}\``).join(', '))
                    //.setFooter("ID del juego:", data.appid)
            
                    return message.channel.send({ embeds: [gameInfo] });
        
                })
    
            } else {
        
            return message.channel.send("Debes poner una ID válida. Sólo números");
        
            }
            
        } catch(error) {
            message.channel.send("Ha ocurrido un error!");
            console.log(error)
        }
  
    }

}