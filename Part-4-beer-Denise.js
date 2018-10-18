var bodyElem = document.querySelector('body');

var beer = 99;

while (beer >= 1) {
    var bottles = mkBottles(beer);
    document.body.appendChild(bottles);
    beer -= 1;
}

var line1 = function(bottles) {
    return (`${bottles}`);
}

while (beer >= 1) {
    console.log( line1(beer) )
    console.log('\n')
    beer -= 1;
}