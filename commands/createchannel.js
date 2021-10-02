exports.run = async (client, message, args) => { 
    if (!message.member.permissions.has("MANAGE_CHANNELS"))
      return message.reply("you dont have permission to use this command")
    
    const channelnameQuery = args.join(" ");
    if (!channelnameQuery)
      return message.reply("please specify a channel name")

    message.guild.channels.create(channelnameQuery).then( (ch) => {
        message.channel.send(`click ${ch} to see the newly created channel`)
    })
    
}