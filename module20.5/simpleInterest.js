function simpleInterest(P, R, T) {
    const SI = (P * R * T) / 100;
    return SI;
}

const value = simpleInterest(50, 0.5, 5);
const shortValue = value.toFixed(2);
console.log(shortValue);