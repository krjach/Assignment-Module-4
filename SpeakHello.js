(function(wdow) {

	var helloSpeaker = {};
	var speakWord = "Hello";

	helloSpeaker.speak = function(name) {
	  console.log(speakWord + " " + name);
	}

	wdow.helloSpeaker = helloSpeaker

})(window);