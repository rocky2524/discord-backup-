exports.run = async (client, message, args) => { 
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.reply("you dont have permission to use this command")
    
    const channeldeletename = message.mentions.channels.first()

    channeldeletename.delete()
    return message.reply("channel has been successfully deleted")
}