function hourToMinutes(hour) {
    const minutes = hour * 60;
    return minutes;
}

const min = hourToMinutes(3);
console.log(min, "Minutes");