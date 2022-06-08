(function (window) {
    let helloSpeaker = {};
    let speakWord = "Hello";

    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);
