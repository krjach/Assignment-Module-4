(function(wdow) {
	
	var byeSpeaker = {};
	var speakWord = "Good Bye";

	byeSpeaker.speak = function (name) {
	  console.log(speakWord + " " + name);
	}

	wdow.byeSpeaker = byeSpeaker

})(window);