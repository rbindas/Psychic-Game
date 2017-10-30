//Variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var comppick = [];
var userguess =[];
var wins =[];
var loses = [];
var guessleft = 9;



//Funtions
function rewriteguessleft() {
	console.log("Guess's left " + guessleft);
}

function randLetter() {
  var comppick = letters[Math.floor(Math.random() * letters.length)];
  
  	return comppick;
  }

 function userguess () {
 	var userguess = document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();

        if (letter === comppick) {
        	wins = wins++;
        	rewriteguessleft();
        else {
        	if(guessleft = 9)

        	}
        }
 }





