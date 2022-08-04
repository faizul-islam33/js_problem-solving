function make_avg(array, length) {
    var sum = 0;
    var array = [10, 10, 12];
    for (var i = 0; i < length; i++) {
        sum += array[i];
    }

    var avg = sum / length;
    avg = avg.toFixed(2);
    return avg;
}

const avgMark = make_avg([10, 10, 12], 3);

console.log(avgMark);