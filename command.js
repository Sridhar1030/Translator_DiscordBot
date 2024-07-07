const { REST, Routes } = require('discord.js');

const commands = [
    {
        name: 'translate',
        description: 'Translate text to English',
        options: [
            {
                name: 'text',
                type: 3,
                description: 'The text to translate',
                required: true,
            },
        ],
    },
];

const rest = new REST({ version: '10' }).setToken('MTI1OTQyNzY4OTgzMjUxNzY4Mw.Gty5Sg.j5pzBnCt70n8yKlx4Zzs5XMPAxPA2UoyEQgc8w');

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands("1259427689832517683"),
            { body: commands },
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
