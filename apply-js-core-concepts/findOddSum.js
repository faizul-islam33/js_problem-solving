function getSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        sum += element;
        //console.log(index, element, sum);
    }
}


function getOddNumbersOfAnArray(numbers) {
    let sum = 0;
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 1) {
            sum += element;
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return sum
    //return oddNumbers;
}

const myNumbers = [12, 65, 43, 78, 32, 45, 91];
console.log(getOddNumbersOfAnArray(myNumbers));

getSum(myNumbers);