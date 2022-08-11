const products = [
    { id: 1, name: 'oneplus phone', price: 15000 },
    { id: 2, name: 'samsung phone', price: 19000 },
    { id: 3, name: 'lenovo laptop', price: 47000 },
    { id: 4, name: 'dell laptop', price: 48000 },
    { id: 5, name: 'xiaomi phone', price: 17000 },
    { id: 6, name: 'nokia phone', price: 45000 },
    { id: 7, name: 'oppo Phone', price: 25000 }
];


function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}


const result = matchedProducts(products, 'phone');
console.log(result);