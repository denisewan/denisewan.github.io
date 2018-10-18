
var mkBottle = function() {
    var imgElem = document.createElement('img');
    imgElem.src = 'images/beer.png';
    return (imgElem);
}

//Create an <img>
var bodyElem = document.querySelector('body');

/*
var line1 = function(bottles) {
    return (`${bottles} bottles of beer on the wall, ${bottles} bottles of beer.`);
}
var line2 = function(bottles) {
    return (`Take one down and pass it around, ${bottles - 1} bottles of beer on the wall.`);
}
var beer = 99;

while (beer >= 1) {
    console.log( line1(beer) )
    console.log(line2(beer))
    console.log('\n')
    beer -= 1;
}
*/