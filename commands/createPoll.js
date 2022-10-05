const { SlashCommandBuilder } = require('discord.js');
const emojiCharacters = require('./emojicharacters.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('createPoll')
		.setDescription('Creates a poll.'),
	async execute(interaction) {
		await interaction.channel.send('My message.').then(sentMessage => {
            sentMessage.react(emojiCharacters[0]);
            sentMessage.react(emojiCharacters[1]);
        })
	},
};