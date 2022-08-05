function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= 10; i++) {
        factorial = factorial * i;
        console.log(i, factorial);
    }
    return factorial;
}

const factorial = getFactorial(10);
console.log('factorial of 8 is: ', factorial);

