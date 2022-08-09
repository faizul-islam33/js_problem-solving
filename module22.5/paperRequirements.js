function paperRequirements(firstBookCopy, secondBookCopy, thirdBookCopy) {
    const firstBookPage = 100;
    const secondBookPage = 200;
    const thirdBookPage = 300;

    const totalPages = firstBookCopy * firstBookPage + secondBookCopy * secondBookPage + thirdBookCopy * thirdBookPage;

    return totalPages;
}

console.log(paperRequirements(3, 2, 1));


