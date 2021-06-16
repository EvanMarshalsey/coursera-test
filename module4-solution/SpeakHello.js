(function (window) {
 var helloSpeaker = {};
 var speakWord = "Hello";
 helloSpeaker = function speak(name) {
   console.log(speakWord + " " + name);
 }
  window.helloSpeaker = helloSpeaker;
} )(window);
