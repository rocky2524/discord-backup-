const Discord = require('discord.js');
const config = require("../config.json")

exports.run = async (client, message, member, args) => {
    message.delete()
    const embed = new Discord.MessageEmbed()
    .setTitle("`Welcome to My Help Menu`")
    .setColor("#6A0DAD")
    .setDescription(`\`${config.prefix}help\`\n> shows the commands of bot\n\n\`${config.prefix}backup\`\n> create a backup of discord server\n\n\`${config.prefix}backupinfo <backup id>\`\n> see the info of backup server\n\n\`${config.prefix}createbackup <backup id>\`\n> create a new server using backup id`)
    return message.channel.send(embed)
}