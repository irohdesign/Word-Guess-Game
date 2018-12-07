//declaring variables/objects

possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var guessesMade = 0;
var guessesLeft = 10;
var userScore = 0;
var lossCount = 0;

var userGuesses = [];

var wins = document.getElementById('winning-counter');
var losses = document.getElementById('losing-counter');
var yourGuessesDiv = document.getElementById('your-guesses');
var guessesLeftDiv = document.getElementById('guesses-left');

var randomLetter = (Math.floor(Math.random() * 26));
computerGuess = possibleLetters[randomLetter];


//starting function on keyup

document.onkeyup = function() {

    var userGuess = event.key;

    if (userGuess == computerGuess) {
        alert("You got it!");
        userScore++;
        wins.textContent = "You've won " + userScore + " times.";

        var randomLetter = (Math.floor(Math.random() * 26));
        computerGuess = possibleLetters[randomLetter];
        yourGuessesDiv.textContent = "";
        guessesLeftDiv.textContent = "You have 10 chances."

        if(userScore == 1) {
            wins.textContent = "You've won 1 time.";
        }
    } else {
       userGuesses.push(userGuess);
       guessesMade++;
       guessesLeft--;
       guessesLeftDiv.innerHTML = "You have " + guessesLeft + " guesses left.";

       if(guessesLeft == 8) {
        guessesLeftDiv.textContent = "Looking pretty weak there. " + guessesLeft + " guesses left, buddy.";
   }

       if(guessesLeft == 1) {
            guessesLeftDiv.textContent = "You have 1 guess left. Choose wisely.";
       }

       if(guessesLeft == 0) {
           alert("BOO, YOU LOST");

           computerGuess = possibleLetters[randomLetter];
           guessesLeft = 10;
           lossCount++;
           losses.textContent = "You've lost " + lossCount + " times.";

           if(lossCount == 1) {
                losses.textContent = "You've lost " + lossCount + " time.";
           }

           if(lossCount > 2) {
                losses.textContent = "Yikes. You suck. You've lost " + lossCount + " times.";
           }

           userGuesses = [];
           yourGuessesDiv.textContent = "";

           guessesLeftDiv.innerHTML = "You have " + guessesLeft + " guesses left. Maybe you'll get it this time, dweeb.";

           if(lossCount > 1) {
            var boringDiv = document.createElement("div");
            boringDiv.innerHTML = "<img src='https://media1.tenor.com/images/67857fb3daf353818de1946b5bc03c7c/tenor.gif?itemid=10523960'>";
            boringDiv.setAttribute("class", "boring");
            yourGuessesDiv.appendChild(boringDiv);
           }
       }

        if(userGuesses.length == 0) {
            //array is empty. don't do anything.
        } else {
            yourGuessesDiv.textContent = userGuesses;
        }
    
}
}