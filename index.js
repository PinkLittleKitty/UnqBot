const { channel } = require("diagnostics_channel");
const Discord = require("discord.js");
const Client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_PRESENCES", "GUILD_MEMBERS"]});
const fs = require("fs")
const { readdirSync } = require("fs")

const config = require("./config.json");
const token = config.BOT_TOKEN;
const prefix =  config.PREFIX;

Client.on("ready", () => {
    console.log(`Bot ${Client.user.username} encendido`)
});

//Commands

Client.commands = new Discord.Collection()
const files = fs.readdirSync(`./commands`).forEach((dir) => {
    const commands = fs.readdirSync(`./commands/${dir}/`).filter(file => file.endsWith('.js'));
    for(let file of commands){
        let cmd = require(`./commands/${dir}/${file}`);
        if(cmd.name){
            Client.commands.set(cmd.name, cmd);
        } 
    }
})
console.log(`Loaded ${Client.commands.size} commands`);


Client.on("messageCreate", async (message) => {
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    let cmd = Client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
    if(cmd){
        cmd.execute(Client, message, args)
    } else {
        if(!cmd){
            return;
        }
    }

});

//Welcomes

Client.on("guildMemberAdd", async member => {
    try {

        let channel = Client.channels.cache.get('958019829577711678');
        let msg = [
            `Hola ${member}, queres un mate?`,
            `Hagan espacio en la ronda que llegó ${member}`,
            `Llegó ${member}, el alma de la fiesta amigoo!`,
            `Fua tanta facha vas a tener? ${member}`,
            `Mientras ${member} entra, a la wacha le están entrando`
        ]
        
        let messageWelcome = msg[Math.floor(Math.random() * msg.length)];
        
        channel.send(`${messageWelcome}`)
    } catch(error) {
        console.log(error)
    }
})

Client.login(token);