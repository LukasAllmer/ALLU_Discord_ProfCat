module.exports = {
	name: 'interactionCreate',
	execute(interaction) {
		try {
			console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
		} catch (error) {
			console.log("Something went wrong when trying to parse an interaction!")			
		}
	},
};