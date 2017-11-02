var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessLeft = 9;
var guessedLetters = [];
var letterToGuess = [];

// randomizer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

// limits guesses to 9
var updateGuessesLeft = function() {

  document.querySelector('#guessLeft').innerHTML = "Number of guesses remaining: " + guessLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {

  document.querySelector('#let').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
};


var reset = function() {
  totalGuesses = 9;
  guessLeft = 9;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

document.onkeyup = function(event) {
    guessLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Psychic!");
                reset();
            }
        }else if(guessLeft == 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're psychic, try again");
            reset();
        }
};