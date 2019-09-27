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

# Get a youtube API token
Go to <https://developers.google.com/> and log in or create an account, if necessary.
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

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mrsmook/music-discord-heroku-bot/tree/master)


![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-5.png "Make your own music Discord bot for FREE")

And then click manage app for the next section.
# Configure your bot
Under resources tab disable Web and activate Worker.

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-6.png "Make your own music Discord bot for FREE")

 Under settings click on add buildpack and copy paste this link :
https://gist.github.com/e1d9b00e76032a98afa404e18185841f

Then click on reveal config vars and add the copied tokens and the prefix you want to use for the bot

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-7.png "Make your own music Discord bot for FREE")
![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-8.png "Make your own music Discord bot for FREE")

Finally click on more and restart all dynos

![Make your own music Discord bot for FREE](/assets/img/contents/discord-tutorial-9.png "Make your own music Discord bot for FREE")

Now you cant test your bot with any command
https://gist.github.com/b2228080dda37dccda2b96ae2c181a07

if you liked the tutorial you can **support me** by :

<style>.bmc-button img{width: 27px !important;margin-bottom: 1px !important;box-shadow: none !important;border: none !important;vertical-align: middle !important;}.bmc-button{line-height: 36px !important;height:37px !important;text-decoration: none !important;display:inline-flex !important;color:#FFFFFF !important;background-color:#FF813F !important;border-radius: 3px !important;border: 1px solid transparent !important;padding: 1px 9px !important;font-size: 22px !important;letter-spacing: 0.6px !important;box-shadow: 0px 1px 2px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;margin: 0 auto !important;font-family:'Cookie', cursive !important;-webkit-box-sizing: border-box !important;box-sizing: border-box !important;-o-transition: 0.3s all linear !important;-webkit-transition: 0.3s all linear !important;-moz-transition: 0.3s all linear !important;-ms-transition: 0.3s all linear !important;transition: 0.3s all linear !important;}.bmc-button:hover, .bmc-button:active, .bmc-button:focus {-webkit-box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;text-decoration: none !important;box-shadow: 0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important;opacity: 0.85 !important;color:#FFFFFF !important;}</style><link href="https://fonts.googleapis.com/css?family=Cookie" rel="stylesheet"><a class="bmc-button" target="_blank" href="https://www.buymeacoffee.com/kZJ60uvLA"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/BMC-btn-logo.svg" alt="Buy me a coffee"><span style="margin-left:5px">Buy me a coffee</span></a>

