
//pseudocode

//create an array for all of the letters to be stored in
possibleLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


//start this function onkeyup

document.onkeyup = function() {
    console.log("you pressed a key");
}
//computer randomly selects a letter



//user enters their letter


//compare the user letter to the computer's letter

    //userGuess === computerGuess => victory

        //make alert to tell them they've won

        //count how many times they've won

    //userGuess !== computerGuess => incorrect (make a shake animation?)
        //make alert to tell them it's wrong

        //count how many guesses left

        //alert when there's no guesses left

        //count how many times they went to 0

//restart the game WITHOUT REFRESH, keeping the losses counter