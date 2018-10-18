
var mkBottle = function() {
    var imgElem = document.createElement('img');
    imgElem.src = 'images/beer.png';
    return (imgElem);
}

var mkBottles = function(num) {
    //create the div
    var divElem = document.createElement('div');
    while (num > 0) {
        num -= 1;
        var beerImg = mkBottle();
        divElem.appendChild(beerImg);
    }
    return (divElem);
}

var mkTitle = function(text) {
    // <h1></h1>
    var h1Elem = document.createElement('h1');
    // <h1>text</h1>
    h1Elem.textContent = text;
    return (h1Elem);
}

//Create an <img>
var bodyElem = document.querySelector('body');

//var title = mkTitle('99 Bottles of Beer')
//document.body.appendChild(title);

var beer = 99;
/*
while (beer >= 1) {
    var bottles = mkBottles(beer);
    document.body.appendChild(bottles);
    beer -= 1;
}

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