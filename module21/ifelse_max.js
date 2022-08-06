function maxCake(jim, dela, chinku) {
    if (jim > dela && jim > chinku) {
        console.log('Jim gets the cake');
    }
    else if (dela > jim && dela > chinku) {
        console.log('Dela gets the cake');
    }
    else {
        console.log('Chinku gets the cake');
    }
}

maxCake(11, 33, 22);