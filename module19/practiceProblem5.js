var signal = 'green';

switch (signal) {
    case 'red':
        console.log('Don\'t cross, please!');
        break;
    case 'yellow':
        console.log('Stop, please, don\'t cross unless emergency!');
        break;
    case 'green':
        console.log('You can cross the road safely!')
        break;
    default:
        console.log('None');
}