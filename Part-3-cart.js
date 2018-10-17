var base = parseInt(prompt('Enter your multiplication base') )

var msg1 = 'Your multiplcation base ' + base;
//var msg = `Your multiplicatoin base is ${base}`;
console.log(msg1);

var count = 0;

while (count < 12) {
    count += 1; //count = count + 1;
    var result = base * count;
    //String concatenation
    //console.log(base + ' x ' + count + ' = ' + result)
    //String interpolation
    console.log(`>>> ${base} x ${count} = ${result}`);
    //console.log(base, " x ", count, " = ", result);
}