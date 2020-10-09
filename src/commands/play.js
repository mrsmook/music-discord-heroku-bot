const { Util } = require('discord.js');
const ytdl = require('ytdl-core');
let search = require('youtube-search');
let opts = {
  maxResults: 1,
  key: 'AIzaSyCwruUG_wYFitHNF2ByWHCk25yJYybtLEo',
  type: 'video'
};
module.exports = {
	name: 'play',
	description: 'Play command.',
	usage: '[command name]',
	args: true,
	cooldown: 5,
	async execute(message, args) {
		const { channel } = message.member.voice;
		if (!channel) return message.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
		const permissions = channel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT')) return message.channel.send('I cannot connect to your voice channel, make sure I have the proper permissions!');
		if (!permissions.has('SPEAK')) return message.channel.send('I cannot speak in this voice channel, make sure I have the proper permissions!');

		let song = await search(args[0].replace(/<(.+)>/g, '$1'), opts, async function(err, results) {
		  if(err) return console.log(err);
		  console.dir(results[0].id);
		  console.dir(results[0].link);
		  console.dir(results[0].title);
		  let song = {
				id: results[0].id,
				title: Util.escapeMarkdown(results[0].title),
				url: results[0].link
			};
			
			console.log(song);
		const serverQueue = message.client.queue.get(message.guild.id);
		
		if (serverQueue) {
			serverQueue.songs.push(song);
			console.log(serverQueue.songs);
			return message.channel.send(`✅ **${song.title}** has been added to the queue!`);
		}

		const queueConstruct = {
			textChannel: message.channel,
			voiceChannel: channel,
			connection: null,
			songs: [],
			volume: 2,
			playing: true
		};
		message.client.queue.set(message.guild.id, queueConstruct);
		queueConstruct.songs.push(song);

		const play = async song => {
			const queue = message.client.queue.get(message.guild.id);
			if (!song) {
				queue.voiceChannel.leave();
				message.client.queue.delete(message.guild.id);
				return;
			}

			const dispatcher = queue.connection.play(ytdl(song.url))
				.on('finish', () => {
					queue.songs.shift();
					play(queue.songs[0]);
				})
				.on('error', error => console.error(error));
			dispatcher.setVolumeLogarithmic(queue.volume / 5);
			queue.textChannel.send(`🎶 Start playing: **${song.title}**`);
		};

		try {
			const connection = await channel.join();
			queueConstruct.connection = connection;
			play(queueConstruct.songs[0]);
		} catch (error) {
			console.error(`I could not join the voice channel: ${error}`);
			message.client.queue.delete(message.guild.id);
			await channel.leave();
			return message.channel.send(`I could not join the voice channel: ${error}`);
		}
		});
		
	}
};
