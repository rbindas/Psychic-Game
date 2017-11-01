//Variables

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var comppick = [];
var userguess =[];
var wins =[];
var loses = [];
var numguesses = 9;
var currentguesses = [];



function restartGame(){
	numguesses = 9;
	currentguesses = [];

}

//Listens for key being pressed
document.onkeyup = function(event){
			
	// Captures the key press, converts it to lowercase, and saves it to a variable.
	var userguess = event.key.toLowerCase();
    // Computers pick
  	var comppick = letters[Math.floor(Math.random() * letters.length)];

 	console.log("Computer pick " + comppick);
 	console.log("User Guess " + userguess);
};

if (userguess === comppick) {
        	wins++;
        	restartGame();
        	conole.log(wins);
    } else { if(numguesses < 9) {
    			console.log (loses);
    		} else {
    			loses++;
    		};
    	
};
 





