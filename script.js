(function () {

    let names = ["Akari", "Johnson", "Mike", "Mai", "Jonathan", "Daniel"];

    for (let i = 0; i < names.length; i++) {

      let firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
        byeSpeaker.speak(names[i]);
      }
      else {
        helloSpeaker.speak(names[i]);
      }
    }

    })();
