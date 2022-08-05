function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * (5 / 9);
    return celsius;
}

const value = fahrenheitToCelsius(92);
const shortValue = value.toFixed(2);
console.log(shortValue);