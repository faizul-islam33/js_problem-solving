// Has return + Has parameter

function odd_even1(int1) {
    if (int1 % 2 == 0) {
        const num = 'Even';
        return num;

    } else {
        const num = 'Odd';
        return num;

    }

}

const odd_even11 = odd_even1(5);
console.log(odd_even11);



// No return + Has parameter

function odd_even2(int2) {
    if (int2 % 2 == 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

odd_even2(7);



// Has return + No parameter

function odd_even3() {
    if (2 % 2 == 0) {
        const number = 'Even';
        return number;
    } else {
        const number = 'Odd';
        return number;
    }
}

console.log(odd_even3());



// No return + No parameter

function odd_even4() {
    if (4 % 4 == 0) {
        console.log('Even');
    } else {
        console.log('Odd');
    }
}

odd_even4();