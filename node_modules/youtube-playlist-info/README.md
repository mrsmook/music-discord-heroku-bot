# Youtube Playlist Info #

Youtube Playlist Info is a library that fetches all the information for the songs within a playlist then returns them as one big array. This abstracts away the annoying paging of requests that have to be done when handling the API manually.

The library does not currently emit progress events, however pull requests are welcome.

### Install ###
```
npm install youtube-playlist-info
```

### Usage ###
```
var ypi = require('youtube-playlist-info');
ypi.playlistInfo("YOUR_YOUTUBE_API_KEY", "PLAYLIST_ID", function(playlistItems) {
  console.log(playlistItems);
});
```

### Testing this Library ###

```
API_KEY=YOUR_API_KEY node test.js
```

Should just spit out a bunch of items in the playlist followed by the length of the playlist.
