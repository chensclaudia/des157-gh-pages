
//document.getElementById("clickMe").onclick = function () { alert('hello!'); };




function libIt() {
      alert("Hi");
      var storyDiv = document.getElementById("story");
      var place = document.getElementById("place").value;
      var food = document.getElementById("food").value;
      var bodyPart = document.getElementById("bodyPart").value;
      var adjective = document.getElementById("adjective").value;
      var secondPart = document.getElementById("secondPart").value;
      var sound = document.getElementById("sound").value;
      var erVerb = document.getElementById("erVerb").value;
      var noun = document.getElementById("noun").value;
      var person = document.getElementById("person").value;
      var noun = document.getElementById("noun").value;

      storyDiv.innerHTML = "Living in my own " +  place ", didn't understand" + "<br>" + "That anything can happen," +"<br>" +"when you take a chance"
      + "I never believe in " + food + "<br>" + "I never opened my " + bodyPart + "(oh)" + "to all the possibilities, ooh"
      + "I know that something had changed" + "<br>" + "Never felt this way" + "<br>" + "And right here, tonight" + "<br>"
      + "This could be the start of something " + adjective + "It feels so right to be here with you, oh" + "<br>"
      + "And now looking in your " + secondPart + "I feel in my " + bodyPart + "the start of something " + adjective
      + "<br>" + "Oh, yeah" + "<br>" + "Now who'd have ever thought that " + sound + "<br>" + "We'd both be here tonight? Oh"  + "<br>"
      + "Yeah, and the world looks so much " + erVerb + "Oh with you by my side" + "<br>" + "I know that " + noun + "has changed" + "<br>"
      + "Never felt this way" + "<br>" + "I know it for real" + "<br>" + "This could be the start of something " + adjective + "<br>"
      + "It feels so right to be here with you, oh" + "And now looking in your " + secondPart + "<br>" + "I feel it in my " + bodyPart
      + "the start of something new" + "<br>" + "I never knew that it could happen, 'til it happened to " + Person + "<br>" + "Oh, yeah" +"<br>"
      + "I didn't know it before, but now it's easy to see, oh" + "<br>" + "It's the start of something " + adjective + "<br>"
      + "It feels so right to be here with you, oh" +"<br>" + "And now, looking in your " + secondPart + "<br>" + "I feel it in my " + bodyPart + "<br>"
      + "The start of something " + adjective + "<br>" + "The start of something new";
    }

    var libButton = document.getElementById('lib-button');
    libButton.addEventListener('click', madLibs);
