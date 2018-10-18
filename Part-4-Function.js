console.log('functions');

var pi = 3.4;
//parameters - formal parameters
var greetings = function(name = 'anon') {
    console.log('Hello ', name);
};

//Actual parameter
greetings('Fred');
greetings('Barney');
greetings('Betty');
greetings();

var sum = function(a, b) {
    var total = a + b;
    return (total);
}
var div = function(a, b) {
    return (a / b);
}

var result = sum(3, 4);
var moreResult = div(
    sum(3, 4), 
    sum(6, 7)
);
console.log('3 + 4 = ', result);
console.log('(3 + 4)/(6 + 7) = ', moreResult);