
//Global Variables
//counters
var wins = 0;
var losses = 0;
var numberOfGuesses = 9;


var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var Randomletter = alphabet[Math.floor(Math.random() * alphabet.length)]

//user input

document.onkeyup = function playerchoice(event) {
    var choice = event.key;
    alert("you picked " + choice)
    
    
document.getElementById("wins").innerHTML = wins;
document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
document.getElementById("losses").innerHTML = losses;



    if (choice === Randomletter ){
        wins++;
        document.getElementById("wins").innerHTML = wins;
    }
    else {
        numberOfGuesses--;
        document.getElementById("numberOfGuesses").innerHTML = numberOfGuesses;
    }
    if (numberOfGuesses === 0) {
        losses++;
        document.getElementById("losses").innerHTML = losses;
        alert("you loose")
        numberOfGuesses=10;
    }
    
}

//Random letter generator









//Functions//
