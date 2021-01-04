
The discord API provides you with an easy tool to create and use your own bots and tools. For this tutorial we are going to create a basic music bot and add it to our server, not only for developers any one can do it. The bot will have the following command :
* PLAY command.
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

## Requirements
[Heroku account](https://signup.heroku.com)

[Google account](https://developers.google.com/)

# Setting up a discord bot
First, we need to create a new application on the discord development portal.
We can do so by visiting the portal and clicking on new application.

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-1.png "Make your own music Discord bot for FREE")

Chose the right name for the application

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-2.png "Make your own music Discord bot for FREE")

After that, we need to select the bot tab and click on add bot and **copy the token** and store it we will need it later.

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-2-5.png "Make your own music Discord bot for FREE")
![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-2-6.png "Make your own music Discord bot for FREE")

Now that both application and bot are created we have to associate the bot to our server

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-3.png "Make your own music Discord bot for FREE")
![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-4.png "Make your own music Discord bot for FREE")


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
