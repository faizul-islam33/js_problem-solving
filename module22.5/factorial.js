function factorial(number) {
    let value = 1;
    for (let i = number; i >= 1; i--) {
        value = value * i;
    }
    return value;
}

console.log(factorial(7));