function make_avg(int1, int2, int3) {
    const avg = (int1 + int2 + int3) / 3;
    return avg;
}

const avgMarks = make_avg(10, 12, 14);

console.log(avgMarks);