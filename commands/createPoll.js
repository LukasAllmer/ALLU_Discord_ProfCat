const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createPoll')
		.setDescription('Creates a poll.'),
	async execute(interaction) {
		await interaction.channel.send('My message.').then(sentMessage => {
            sentMessage.react('👍');
        })
	},
};