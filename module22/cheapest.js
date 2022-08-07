const phones = [
    { name: 'Samsung', camera: 12, storage: '32gb', price: 32000, color: 'silver' },
    { name: 'Walton', camera: 10, storage: '32gb', price: 22000, color: 'maroon' },
    { name: 'Iphone', camera: 10, storage: '32gb', price: 82000, color: 'cyan' },
    { name: 'OnePlus', camera: 10, storage: '32gb', price: 42000, color: 'red' },
    { name: 'Nokia', camera: 10, storage: '32gb', price: 44000, color: 'orange' },
    { name: 'HTC', camera: 10, storage: '32gb', price: 62000, color: 'brown' },
    { name: 'Sony', camera: 10, storage: '32gb', price: 52000, color: 'black' },
];

function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

const mySelection = cheapestPhone(phones);
console.log(mySelection);

