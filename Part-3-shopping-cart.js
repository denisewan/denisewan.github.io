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

var msg = `The contents of your cart are: ${fruits}`;
console.log(msg);


//contents of your carts are

