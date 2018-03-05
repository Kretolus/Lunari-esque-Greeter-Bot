const Discord = require('discord.js');
const winston = require('winston');

const config = require("./config.json");

const client = new Discord.Client();

const logger = winston.createLogger({
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' })
    ]
});

client.on('ready', () => {
    logger.log({
        level: 'info',
        message: 'Valkyrie online!'
    });
});

client.login(config.token);