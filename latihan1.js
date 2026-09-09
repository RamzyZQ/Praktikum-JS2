const cart = [
    { title: "Laptop", price: 1000, discountPercent: 10 },
    { title: "Mouse", price: 20, discountPercent: 5 },
    { title: "Keyboard", price: 50, discountPercent: 0 }
];



function calculateDiscountedPrice(price, discountPercent) {
    return price - (price * discountPercent) / 100;
}

console.log(calculateDiscountedPrice(100000, 2));


function applyDiscount(cart) {
    const result = [];
    for (const item of cart) {
        const calculatedPrice = item.price - (item.price * item.discountPercent) / 100;
        result.push(calculatedPrice);
    }
    return result;
}

console.log(applyDiscount(cart));