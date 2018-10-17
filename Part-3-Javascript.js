// Get a random integer from 1 to 10 inclusive
var num = Math.ceil(Math.random() * 10);
var gnum = prompt('Guess the number between 1 and 10 inclusive');
if (gnum == num)
  alert('You read my memory');
 else
  alert('Not matched, the number was ' + num);