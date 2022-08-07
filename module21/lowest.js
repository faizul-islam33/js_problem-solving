function lowestInArray(numbers) {
    let lowest = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }
    return lowest;
}

const array = [5, 10, 15, 20, 25];


console.log(lowestInArray(array));