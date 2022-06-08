(function (window){
    let byeSpeaker = {};
    let speakWord = "Good Bye";

    byeSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }

     window.byeSpeaker = byeSpeaker;
    })(window);
