var word = "javascript";
var wordDisplay = [];
for (var i = 0; i < word.length; i++) {
  wordDisplay[i] = "_";
}
console.log(wordDisplay.join(" "));

var incorrectGuesses = [];

var remainingLives = 6;

while (wordDisplay.join("") !== word && remainingLives > 0) {
  var letter = prompt("Guess a letter:");
  var correctGuess = false;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      wordDisplay[i] = letter;
      correctGuess = true;
    }
  }
  if (!correctGuess) {
    incorrectGuesses.push(letter);
    remainingLives--;
  }
  console.log(wordDisplay.join(" "));
  console.log("Incorrect guesses: " + incorrectGuesses.join(" "));
}

if (wordDisplay.join("") === word) {
  console.log("You win!");
} else {
  console.log("You lose. The word was " + word + ".");
}
