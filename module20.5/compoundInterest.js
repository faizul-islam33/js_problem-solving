function compoundInterest(P, R, T) {
    const CI = (P * (Math.pow((1 + R / 100), T))) - P;
    return CI;
}

console.log(compoundInterest(10000, 5, 2))