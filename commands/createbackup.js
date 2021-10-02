const backup = require('discord-backup');
const config = require('../config.json');

exports.run = async (client, message, args) => {  
    message.delete()

    // If the member doesn't have enough permissions
    if(!message.member.hasPermission('MANAGE_MESSAGES')){
        return message.channel.send(':x: You need to have the manage messages permissions to create a backup in this server.');
    }

    backup.create(message.guild).then((backupData) => {

        return message.member.send('Backup created Here is your ID `'+backupData.id+'` \n\n Use `'+config.prefix+'createbackup '+backupData.id+'` to create the backup on another server by inviting me and use this command');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    });

};
