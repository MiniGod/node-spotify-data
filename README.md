node-spotify-data
=================

Simple spotify metadata. Supports playlist, cover art, artist, album and track.

## Install

`npm install spotify-data --save`

## Parsing URIs
`spotify.uri = require('spotify-uri');` - https://github.com/TooTallNate/spotify-uri

```
var parsed = spotify.uri.parse('spotify:track:1pKYYY0dkg23sQQXi0Q5zN')
// { uri: 'spotify:track:1pKYYY0dkg23sQQXi0Q5zN',
//   type: 'track',
//   id: '1pKYYY0dkg23sQQXi0Q5zN' }

spotify.uri.formatURI(parsed);
// 'spotify:track:1pKYYY0dkg23sQQXi0Q5zN'

// and more... see https://github.com/TooTallNate/spotify-uri
```

## Available methods

```javascript
var spotify = require('spotify-data');

// All callbacks are called with:
var callback = function(err, result) {
	// ...
}

// Lookup
// spotify.lookup(uri, callback);
// 
// - returns response from spotifys metadata web api
spotify.lookup('spotify:track:6bc5scNUVa3h76T9nvpGIH', console.log);
spotify.lookup('spotify:artist:7ae4vgLLhir2MCjyhgbGOQ', console.log);
spotify.lookup('spotify:album:5NCz8TTIiax2h1XTnImAQ2', console.log);
spotify.lookup('spotify:user:syknyk:playlist:0Idyatn0m08Y48tiOovNd9', console.log);

// Lookup alternative:
// spotify.<type>(id, callback);
// spotify.playlist(user, id, callback);
spotify.track('6bc5scNUVa3h76T9nvpGIH', console.log);
spotify.artist('7ae4vgLLhir2MCjyhgbGOQ', console.log);
spotify.album('5NCz8TTIiax2h1XTnImAQ2', console.log);
spotify.playlist('syknyk', '0Idyatn0m08Y48tiOovNd9', console.log);

// Cover:
// spotify.cover(uri, [size,] callback);
// 
// - returns url to cover
// - available sizes: 60, 85, 120, 300, 640, 'cover'.
//     defaults to 'cover', which is 300x300, with a spotify logo in lower right corner.
// - sizes are also available in `spotify.coverSize`.
spotify.cover('spotify:track:6bc5scNUVa3h76T9nvpGIH', console.log);
spotify.cover('spotify:artist:7ae4vgLLhir2MCjyhgbGOQ', console.log);
spotify.cover('spotify:album:5NCz8TTIiax2h1XTnImAQ2', console.log);
spotify.cover('spotify:user:syknyk:playlist:0Idyatn0m08Y48tiOovNd9', console.log);

// Size examples:
spotify.cover('spotify:track:6bc5scNUVa3h76T9nvpGIH', spotify.coverSize.SMALL, console.log);
spotify.cover('spotify:artist:7ae4vgLLhir2MCjyhgbGOQ', spotify.coverSize.NORMAL, console.log);
spotify.cover('spotify:album:5NCz8TTIiax2h1XTnImAQ2', spotify.coverSize.LARGE, console.log);
spotify.cover('spotify:user:syknyk:playlist:0Idyatn0m08Y48tiOovNd9', 120, console.log);

// Cover alternative:
// spotify.<type>.cover(id, [size,] callback)
// spotify.playlist.cover(user, id, [size,] callback);
spotify.track.cover('6bc5scNUVa3h76T9nvpGIH', console.log);
spotify.artist.cover('7ae4vgLLhir2MCjyhgbGOQ', console.log);
spotify.album.cover('5NCz8TTIiax2h1XTnImAQ2', console.log);
spotify.playlist.cover('syknyk', '0Idyatn0m08Y48tiOovNd9', console.log);

// Flatten
// spotify.flatten(id, callback);
// 
// - returns array of tracks from any uri or array of uris.
spotify.flatten('spotify:track:6bc5scNUVa3h76T9nvpGIH', console.log);
spotify.flatten('spotify:artist:7ae4vgLLhir2MCjyhgbGOQ', console.log);
spotify.flatten('spotify:album:5NCz8TTIiax2h1XTnImAQ2', console.log);
spotify.flatten('spotify:user:syknyk:playlist:0Idyatn0m08Y48tiOovNd9', console.log);

// Flatten alternative:
// spotify.<type>.flatten(id, callback);
// spotify.playlist.flatten(user, id, callback);
spotify.track.flatten('6bc5scNUVa3h76T9nvpGIH', console.log);
spotify.artist.flatten('7ae4vgLLhir2MCjyhgbGOQ', console.log);
spotify.album.flatten('5NCz8TTIiax2h1XTnImAQ2', console.log);
spotify.playlist.flatten('syknyk', '0Idyatn0m08Y48tiOovNd9', console.log);

// Flatten list of any URIs:
// spotify.flatten(uris, callback);
var uris = [
	'spotify:album:5NCz8TTIiax2h1XTnImAQ2',
	'spotify:track:3gGhcHH075qI9CPSXKnxy1',
	'spotify:artist:5RBdF1pJSLF3ugc2Y2PoB8',
	'spotify:user:syknyk:playlist:0Idyatn0m08Y48tiOovNd9'
];
spotify.flatten(uris, console.log);
```

Flatten does not guarantee a list of unique tracks.
E.g.: Using `.flatten` on an `artist` will return a lot of duplicates, because most albums are released in many different territories (countries) by different labels, and each album have their own listing of tracks.