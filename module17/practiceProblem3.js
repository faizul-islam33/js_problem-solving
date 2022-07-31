var a = 13;
var b = 79;
var c = 45;

if (a > b && a > c) {
    console.log(a);
} else if (b > a && b > c) {
    console.log(b);
} else {
    console.log(c);
}


var x = 9;
var y = 8;
var z = 9;

if (x == y && y == z) {
    console.log('Not Isosceles');
}
if (x == y || x == z || y == z) {
    console.log('Isosceles');
} else {
    console.log('Not Isosceles');
}