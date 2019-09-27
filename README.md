## Requirements
[Heroku account](https://signup.heroku.com)
[Google account](https://developers.google.com/)

# HEROKU
If you are not a developer all you have to is to copy my pre-coded project and you are good to go, for more details if you want to add more functionalities ask me in comment and i will do a developer version of this tutorial.
click this button.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/mrsmook/music-discord-heroku-bot/tree/master)

And then click manage app for the next section.

# Configure your bot
Under resources tab disable Web and activate Worker.
Under settings click on add buildpack and copy paste this link :
```https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git```
Then click on reveal config vars and add the copied tokens and the prefix you want to use for the bot
Finally click on more and restart all dynos
Now you cant test your bot with any command
```YOUR_PREFIX play justin bieber baby```

if you liked the tutorial you can **support me** by :

<a href="https://www.buymeacoffee.com/kZJ60uvLA" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

