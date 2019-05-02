var secretNumber=29;

var stringGuess=prompt("Guess the Number :  -> ");
var numberGuess=Number(stringGuess);

if (numberGuess===secretNumber){
    alert("Viola ! You got it right.");
} else if (numberGuess>secretNumber){
    alert("Too high ! Guess again.");
} else {
    alert("Too low ! Guess again.");
}