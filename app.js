const fs = require('fs');
const Discord = require('discord.js');
const winston = require('winston');

const { token, owner, prefix, name, } = require("./config.json"); // import config
const commandFiles = fs.readdirSync('./commands'); // import command files

const client = new Discord.Client();
client.commands = new Discord.Collection();

// set up a winston logger
const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
});

// iterate over command files and set available client commands
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

// client 'ready' event
client.on('ready', () => {
    logger.log({
        level: 'info',
        message: 'Valkyrie online!'
    });
});

// message handler
client.on('message', message => {
    // check for prefix and whether the message was posted by a bot
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    // get command arguments and name
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    // check if given command exists
    if (!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);

    // check if arguments are required, and if so if they were provided
    if (command.args && !args.length) {
        return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
    }

    // command execution
    try {
        command.execute(message, args);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

client.login(token); // client API login