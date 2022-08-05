function findLeapYear(array) {
    const leapYear = [];
    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (array[i] % 400 == 0) {

            leapYear.push(element);

        } else if (array[i] % 100 == 0) {


        } else if (array[i] % 4 == 0) {

            leapYear.push(element);

        } else {


        }
    }

    return leapYear;
}

const myArray = [2023, 2024, 2025, 2028, 2030];
console.log(findLeapYear(myArray));
