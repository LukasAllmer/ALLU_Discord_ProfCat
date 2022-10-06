const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('message')
		.setDescription('Sends a message to channel where called!'),
	async execute(interaction) {
		await interaction.reply({
			content: 'Understood, I will post a message!', 
			ephemeral: true
		});
		await interaction.channel.send('My message.');
	},
};