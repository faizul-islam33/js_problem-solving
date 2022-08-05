// using for loop

function factorial(number) {
    let prod = 1;
    for (let i = number; i >= 1; i--) {
        prod = prod * i;
    }
    return prod;
}

console.log(factorial(9));



// using while loop

function fact(number) {
    let mult = 1;
    let i = number;
    while (i >= 1) {
        mult = mult * i;
        i--;
    }
    return mult;
}

const number = 5;
const facted = fact(number);
console.log('Factorial of', number, ':', facted);