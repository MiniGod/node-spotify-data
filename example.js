var spotify = require('./');

var origUri = 'spotify:track:0NQaULcegvCCfiAD8ucCdU';
var parsed = spotify.uri.parse(origUri);
var uri = spotify.uri.formatURI(parsed);
console.log('Parse result:', parsed);
console.log('toUri result:', uri);

spotify.lookup('spotify:track:0NQaULcegvCCfiAD8ucCdU', console.log);
spotify.cover('spotify:track:0NQaULcegvCCfiAD8ucCdU', console.log);

spotify.album('0AKaAXiqrwaXPSn9VNxK6N', console.log);
spotify.album.cover('0AKaAXiqrwaXPSn9VNxK6N', console.log);
spotify.album.cover('0AKaAXiqrwaXPSn9VNxK6N', 640, console.log);
spotify.album.cover('0AKaAXiqrwaXPSn9VNxK6N', spotify.coverSize.SMALL, console.log);

spotify.flatten('spotify:album:0AKaAXiqrwaXPSn9VNxK6N', console.log);
spotify.flatten([
		'spotify:album:0AKaAXiqrwaXPSn9VNxK6N',
		'spotify:album:2XJzHqXuEzqk4yQ8dvpE9P'
	], console.log);

spotify.lookup('spotify:user:minigod:playlist:5ACX9Pa6kRUWWv9ZWD5oH4', console.log);
