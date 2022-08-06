// pow

const result = Math.pow(10, 8);
console.log(result);

const num1 = 25;
const num2 = 45;



//abs

const gap = Math.abs(num1 - num2);

if (gap < 5) {
    console.log('you stupid kid!');
} else {
    console.log('good kid');
}



// round
const number = 2.5567;
const number2 = 2.4567;
const number1 = Math.round(number);
const number22 = Math.round(number2);

console.log(number1);
console.log(number22);




// ceil & floor

const num = 4.2345;
const num3 = Math.ceil(num);
const num4 = Math.floor(num);
console.log(num3);
console.log(num4);




// random

console.log(Math.random());
const randoms = Math.random() * 100;
console.log(randoms);
const emni = Math.round(Math.random() * 100);
console.log(emni);


for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random() * 6);
    console.log(random);
}