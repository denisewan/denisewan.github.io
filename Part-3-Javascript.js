//var toGuess = 6;
var toGuess = Math.floor(Math.random() * 10) + 1;
console.log('toGuess = ', toGuess);

//read in a number
var userInput = prompt('Please enter a number between 1 - 10');
//convert string to number
var usersGuess = parseInt(userInput);

if (toGuess == usersGuess) {
    console.info('You read my memory');

} else if (toGuess > usersGuess) {
    console.warn('Your guess is lower than my number');

} else {
    console.warn('Your guess is higher than my number');
}