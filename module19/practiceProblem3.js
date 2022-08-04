const arr = [5, 6, 7, 8, 9];
x = arr.length;

function make_avg(arr, x) {
    var sum = 0;
    for (var i = 0; i < x; i++) {
        sum += i;
    }

    const avg = sum / x;
    return avg;
}


const avgMark = make_avg();
console.log(avgMark);