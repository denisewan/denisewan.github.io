//Locate #nextBtn
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