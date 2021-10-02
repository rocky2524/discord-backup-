const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.config = config;

client.on("message", (message, backupID) => {
    if (message.content === `${config.prefix}backup`) {
        message.channel.send(`Pls Wait For A Min I Am Createing Backup\n\nThe Backup Info Will Be Send To Your Dm's `);
    }
});  

client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
    channel.send("```Thanks for inviting me```")
})

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Command loaded: ${commandName}`);
    });
});

process.on('unhandledRejection', (reason, p) => {
    console.log('ignore that log'.gray);
  });
  process.on("uncaughtException", (err, origin) => {
    console.log('ignore that log'.gray);
  })
  process.on('uncaughtExceptionMonitor', (err, origin) => {
    console.log('ignore that log'.gray);
  });
  process.on('beforeExit', (code) => {
    console.log('ignore that log'.gray);
  });
  process.on('exit', (code) => {
    console.log('ignore that log'.gray);
  });
  process.on('multipleResolves', (type, promise, reason) => {
    console.log('ignore that log'.gray);
  });
// Login
client.login(config.token);
