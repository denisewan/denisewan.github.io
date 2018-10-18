//Get inputs
var MAXITEMS = 3;
//const MAXITEMS = 3;
var cart = [];
var item = "";

//cond 1 cart.length == 5
//cond 2 item == 'done'

//cond 1 and cond 2
while ((cart.length < MAXITEMS) && (item != 'done')) {
//while (item != "done") {
    item = prompt('Add an item')
    //if ((item != null) && (item != "") && (item != 'done')) {
    if ((item != null) && (item != "")) {
        cart.push(item);
    } //if
} //while
if (item == 'done') {
    cart.pop();
}

console.log('The contents of your cart are:')
var counter = 0;
while (counter < cart.length) {
    console.info(`${counter + 1}. ${cart[counter]}`);
    counter += 1;
}