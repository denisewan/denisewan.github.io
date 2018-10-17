//Get inputs

var fruits = [];
var item = "";
while (item != "done") {
    item = prompt('Add an item')
    if ((item != null) && (item != "")) {
        fruits.push(item);
    }
}   
fruits.pop();

console.log('The contents of your cart are', fruits)