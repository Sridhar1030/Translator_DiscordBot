const { Client, GatewayIntentBits } = require("discord.js");
const translate = require("translate-google");
require("dotenv").config();

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});

client.on("messageCreate", async (message) => {
	if (message.author.bot) return;

	if (message.content.startsWith("translate")) {
		const textToTranslate = message.content.split("translate ")[1];
		console.log(textToTranslate);

		try {
			const translatedText = await translate(textToTranslate, {
				to: "en",
			});
			console.log(translatedText);
			return message.reply({
				content: translatedText,
			});
		} catch (error) {
			console.error(error);
			return message.reply({
				content: "An error occurred while translating.",
			});
		}
	} else {
		message.reply({
			content: "Hello from Translator",
		});
	}
});

client.on("interactionCreate", async (interaction) => {
	if (!interaction.isCommand()) return;
	const { commandName, options } = interaction;

	if (commandName === "translate") {
		const textToTranslate = options.getString("text");
		console.log(textToTranslate);

		try {
			const translatedText = await translate(textToTranslate, {
				to: "en",
			});
			console.log(translatedText);
			return interaction.reply({
				content: translatedText,
			});
		} catch (error) {
			console.error(error);
			return interaction.reply({
				content: "An error occurred while translating.",
			});
		}
	}
});

// Use your actual bot token here
client.login(process.env.DISCORD_BOT_TOKEN);
