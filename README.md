The discord API provides you with an easy tool to create and use your own bots and tools. For this tutorial we are going to create a basic music bot and add it to our server, not only for developers any one can do it. The bot will have the following command :	# Simple discord music bot
* PLAY command.	> Very simple discord music bot with the discordjs.guide command handler for easy learning and adapting.
* HELP command.	
* QUEUE command.	
* NOWPLAYING command.	
* LOOP command.	
* SKIP command.	
* PAUSE command.	
* RESUME command.	
* CLEARQUEUE command.	
* LEAVE command.	
* SEARCH command.	
* VOLUME command.	
* REMOVE command.	
## Requirements	## Install
[Heroku account](https://signup.heroku.com)	


[Google account](https://developers.google.com/)	```
npm install
# or
yarn
```


# Setting up a discord bot	## Usage
First, we need to create a new application on the discord development portal.	
We can do so by visiting the portal and clicking on new application.	


![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-1.png "Make your own music Discord bot for FREE")	Copy/Rename the `.env_example` to `.env` and fill out the values:


Chose the right name for the application	```
DISCORD_TOKEN=
DISCORD_PREFIX=
```


![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-2.png "Make your own music Discord bot for FREE")	## Features


After that, we need to select the bot tab and click on add bot and **copy the token** and store it we will need it later.	* [discordjs.guide](https://discordjs.guide/) like commmand handler, easy for learning!
* Queue system
* Volume control
* Pause/Resume


![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-2-5.png "Make your own music Discord bot for FREE")	## Contributing
![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-2-6.png "Make your own music Discord bot for FREE")	


Now that both application and bot are created we have to associate the bot to our server	1. [Fork the repository](https://github.com/iCrawl/discord-music-bot/fork)!
2. Clone your fork: `git clone https://github.com/your-username/discord-music-bot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Commit your changes: `git commit -am 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D


![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-3.png "Make your own music Discord bot for FREE")	## Author
![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-4.png "Make your own music Discord bot for FREE")	


# Get a youtube API token	**Discord Presence** © [iCrawl](https://github.com/iCrawl).  
Go to <https://developers.google.com/> and log in or create an account, if necessary.	Authored and maintained by iCrawl.
After logging in go to this link [https://console.developers.google.com/project ](https://console.developers.google.com/project)and click on the blue CREATE PROJECT button as depicted in the photo below. Wait a moment as google prepares your project.	

![](/assets/img/contents/youtube-token-1.png)	

Fill in whatever Project Name you want.	

![](/assets/img/contents/youtube-token-2.png)	

Then click [GoogleAPIs link](https://console.developers.google.com/apis/library?project=tester-api-key) in the top left corner and then click the link option called “YouTube Data API.” It’s under YouTube API’s. You can see it highlighted in the photo below, bottom right.	

![](/assets/img/contents/youtube-token-3.png)	

Now click on the “ENABLE” button.	

![](/assets/img/contents/youtube-token-4.png)	

Next click on the blue ‘Go to Credentials’ button to the right.	

![](/assets/img/contents/youtube-token-5.png)	

Choose the select option YouTube Data API v3 for the first select option and Web server(e.g. node js. Tomcat) for the second selection. Then choose Public data. Now click the blue button, “What credentials do I need?.”	

![](/assets/img/contents/youtube-token-6.png)	

Almost done, wait for google to create your new project and you should see the screen below where you can copy your API Key. 	

![](/assets/img/contents/youtube-token-7.png)	

Store the copied API youtube key we will need it in the last step of the tutorial.	
# Deploy our bot	
If you are not a developer all you have to is to copy my pre-coded project and you are good to go, for more details if you want to add more functionalities ask me in comment and i will do a developer version of this tutorial.	
click this button.	
Add the copied tokens and prefix.	

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mrsmook/music-discord-heroku-bot/tree/master)	

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-10.png "Make your own music Discord bot for FREE")	

And then click manage app for the next section.	
# Configure your bot	
Under resources tab disable Web and activate Worker.	

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-6.png "Make your own music Discord bot for FREE")	

Finally click on more and restart all dynos	

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-9.png "Make your own music Discord bot for FREE")	

Now you cant test your bot with any command	
> play justin bieber baby	
if you liked the tutorial you can **support me** by :	

<a href="https://www.buymeacoffee.com/kZJ60uvLA" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
