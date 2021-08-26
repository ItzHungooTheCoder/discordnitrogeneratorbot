const Discord = require('discord.js');
const client = new Discord.Client();
const Nitro = require('discordnitro')
const { MessageEmbed } = require('discord.js');

client.on("ready", () =>{
    console.log(`${client.user.tag}`)
    client.user.setActivity("ng!gen", {
        type: "WATCHING",
        url: ""
      });
});

channel.send({ embeds: [exampleEmbed] });
client.on("message", msg =>{
    if (msg.content === "ng!gen"){
        const nitroEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Discord Nitro')
            .addField(nitro(10), true)

        message.reply("Sent Discord Nitro codes in your dm!")
        message.author.sendMessage(nitroEmbed)
    }
});

client.login(TOKEN);