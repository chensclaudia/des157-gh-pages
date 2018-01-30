function Libs() {
    var storyDiv = document.getElementById("story");
    var place = document.getElementById("place").value;
    var food = document.getElementById("food").value;
    var bodyPart = document.getElementById("bodyPart").value;
    var action = document.getElementById("action").value;
    var adjective = document.getElementById("adjective").value;
    var secondPart = document.getElementById("secondPart").value;
    var sound = document.getElementById("sound").value;
    var person = document.getElementById("person").value;
    var erVerb = document.getElementById("erVerb").value;
    var noun = document.getElementById("noun").value;


    storyDiv.innerHTML = "Living in my own " + place + ", didn't understand" + "<br>"
    + "that anything could happen" + "<br>" + "when you take a " + action + "<br>"
    + "I never believe in " + food + "<br>" + " I never opened my " + bodyPart + " (oh)"
    + "<br>" + "to all the possibilities, ooh" + "<br>"
    + "I know that something had changed" + "<br>" + "Never felt this way" + "<br>"
    + "And right here, tonight" + "<br>"
    + "This could be the start of something " + adjective + "<br>"
    + "It feels so right to be here with you, oh" + "<br>"
    + "And now looking in your " + secondPart + "<bar>" + "I feel in my " + bodyPart
    + "<br>" + "the start of something " + adjective
    + "<br>" + "Oh, yeah" + "<br>" + "Now who'd have ever thought that " + sound
    + "<br>" + "We'd both be here tonight? Oh"  + "<br>"
    + "Yeah, and the " + place + " looks so much " + erVerb
    + "<br>" + "Oh, with you by my side"
    + "<br>" + "I know that " + noun + "has changed" + "<br>"
    + "Never felt this way" + "<br>" + "I know it for real" + "<br>"
    + "This could be the start of something " + adjective + "<br>"
    + "It feels so right to be here with you, oh" + "<br>" + "And now looking in your "
    + secondPart + "<br>" + "I feel it in my " + bodyPart + "<br>"
    + "The start of something new" + "<br>" + "I never knew it could happen until it happened to "
    + person + "<br>" + "Oh, yeah" + "<br>"
    + "I didn't know it before, but now it's easy to see, oh" + "<br>"
    + "It's the start of something " + adjective + "<br>"
    + "It feels so right to be here with you, oh" +"<br>"
    + "And now, looking in your " + secondPart
    + "<br>" + "I feel it in my " + bodyPart + "<br>"
    + "The start of something " + adjective + "<br>" + "The start of something " + adjective;

  }

  var libButton = document.getElementById('button');
  libButton.addEventListener('click', Libs);
