chromecastjs = require('../')

var browser = new chromecastjs.Browser()

var subtitles = {
	url: "https://raw.githubusercontent.com/googlecast/CastClosedCaptioning-chrome/master/captions_styled.vtt",
	name: "English",
	language: "en-US"
}

browser.on('deviceOn', function(device){
  device.connect()
  device.on('connected', function(){

	device.play('http://commondatastorage.googleapis.com/gtv-videos-bucket/big_buck_bunny_1080p.mp4', 60, subtitles, function(){
		console.log('Playing in your chromecast!')
	});

	setTimeout(function(){
		device.pause(function(){
			console.log('Paused!')
		});
	}, 30000);

	setTimeout(function(){
		device.unpause(function(){
			console.log('unpaused!')
		});
	}, 40000);


	setTimeout(function(){
		device.stop(function(){
			console.log('Stoped!')
		});
	}, 60000);

  })
})
