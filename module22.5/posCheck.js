function posCheck(array) {
    const pos = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            pos.push(array[i]);
        } else {
            break;
        }
    }
    return pos;
}


const array = [5, 4, 3, 0, -2, -5, 55, 66, 77];
console.log(posCheck(array));