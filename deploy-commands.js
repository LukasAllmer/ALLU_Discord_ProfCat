const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');
const { clientId, token } = require('./config.json');

// This fetches all .js files from the commands folder and adds it to the commands!
const commands = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	commands.push(command.data.toJSON());
}

const rest = new REST({ version: '10' }).setToken(token);

// Enable to deploy commands globally
rest.put(Routes.applicationCommands(clientId), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);
    

// Enable to delete all global commands
/* rest.put(Routes.applicationCommands(clientId), { body: commands })
    .then((data) => console.log(`Successfully registered ${data.length} application commands.`))
    .catch(console.error);    */
// Enable to delete all commands from a certain guild
/* rest.put(Routes.applicationGuildCommands(clientId, 'guildId'), { body: [] })
.then(() => console.log('Successfully deleted all guild commands.'))
.catch(console.error); */