const config = require("../config.json")
module.exports = (client) => {
    console.log(`Ready as ${client.user.tag} to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
   
    setInterval(() => {
        const statuses = [
            `${config.prefix}backupinfo`,
            `${config.prefix}createbackup`,
            `${config.prefix}loadbackup`,
            `helping to make discord server`

        ]
  
        const status = statuses[Math.floor(Math.random() * statuses.length)]
        client.user.setActivity(status, { type: "WATCHING"})
    }, 6000) 
};