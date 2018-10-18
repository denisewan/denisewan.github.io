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

var nextBtn = document.querySelector('#nextBtn');
var counter = 0;
var updateSlide = function(slideNumber) {
    var img = document.querySelector('#slide');
    img.src = `images/numbers/number${slideNumber}.jpg`;
}
nextBtn.addEventListener(
    'click',  //event name
    function() { //event handler
        counter = (counter + 1) % 31;
        updateSlide(counter);
    }
);

var prevBtn = document.querySelector('#prevBtn');
prevBtn.addEventListener(
    'click', //event name
    function() {
        counter -= 1
        if (counter < 0)
            counter = 30;
        updateSlide(counter);
    }
);