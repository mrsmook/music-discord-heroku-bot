const Discord = require('discord.js');
const Music = require('discord.js-musicbot-addon-v2');
const client = new Discord.Client();

const PREFIX = process.env.PREFIX;

const music = new Music(client, {
    youtubeKey: process.env.BOT_YOUTUBE_TOKEN,
    prefix: PREFIX,
    ownerOverMember: true,
    botOwner: '209728169131900928',
    djRole:'GOD',
    maxQueueSize: "100",
    disableLoop: true,
});

client.login(process.env.BOT_TOKEN);
