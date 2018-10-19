var custId = 1;
var name = "fred";
var email = "fred@gmail.com";
var mobile = "12345";

var custId0 = 2;
var name0 = 'barney';
var email0 = 'barney@gmail.com';
var mobile0 = '34567';

var cust0 = [ 2, 'barney', 'barney@gamil.com', '34567']
var cust1 = [ 1, 'fred', 'fred@gamil.com', '12345']
var cust1 = [ 3, 'fred', '123 bedrock', 'fred@gamil.com', '12345']

var fred = {  //instantiating and object
    //object/dictonary
    name: 'fred',
    email: 'fred@gmail.com',
    phone: '12345',
    age: 50,
    greetings: function() {
        console.log('Hello, my name is ', this.name);
    }
};

//data structure - to hold, represent and organize data
var barney = {
    name: 'barney',
    email: 'barney@gmail.com'
}

console.log(fred);
console.log('name: ', fred['name']);
console.log('email: ', fred.email)

//array of attribute/properties/keys
var props = Object.keys(fred);
//array of the values
var vals = Object.values(fred);

var n = 0;
while (n < props.length) {
    console.log('prop = ', props[n])
    n += 1;
}

n = 0;
while (n < vals.length) {
    console.log('vals = ', vals[n]);
    n += 1;
}

n = 0;
while (n < props.length) {
    console.log(props[n] + " = " + fred[ props[n] ])
    n += 1;
}

console.log('>>> ', fred.name)
fred.greetings()
fred['name'] = "Barney"
fred.greetings()
fred.name = "Fred Flintstone"
fred.greetings()
fred['greetings']()

var abc = 'log';
console[abc]('hello world', abc);
console.log('hello world')

console.log('---Props in console----')
props = Object.keys(console)
n = 0;
console.log(props.length)
while (n < props.length) {
    console.log('props from console: ', props[n])
    n += 1;
}
