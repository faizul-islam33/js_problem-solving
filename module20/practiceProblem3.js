function findOddSum(array) {
    let sumOfOdd = 0;
    for (i = 0; i < array.length; i++) {
        let element = array[i];
        if (element % 2 !== 0) {
            sumOfOdd += element;
        }
    }
    return sumOfOdd;
}


const myArray = [5, 7, 8, 10, 45, 30];
const myArray2 = findOddSum(myArray);
console.log(myArray2);