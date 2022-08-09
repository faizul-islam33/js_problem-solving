function bestFriend(array) {
    let largest = array[0].length;
    let longest;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > largest) {
            largest = array[i].length;
            longest = array[i];
        }
    }
    return longest;
}

const array = ['Turag', 'Sajid', 'Rabbi', 'Roxy', 'Aarik', 'yeah_right'];
console.log(bestFriend(array));

