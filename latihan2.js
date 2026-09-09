const Products = [
    { id: 1, title: "Laptop", price: 1000, discountPercent: 10, stock: 5 },
    { id: 2, title: "Mouse", price: 20, discountPercent: 5, stock: 10 },
    { id: 3, title: "Keyboard", price: 50, discountPercent: 0, stock: 15 },
    { id: 4, title: "Monitor", price: 200, discountPercent: 15, stock: 8 },
    { id: 5, title: "Printer", price: 150, discountPercent: 20, stock: 3 },
    { id: 6, title: "Headphones", price: 80, discountPercent: 10, stock: 12 },  
    { id: 7, title: "Webcam", price: 60, discountPercent: 5, stock: 20 },
    { id: 8, title: "External Hard Drive", price: 120, discountPercent: 15, stock: 7 }
];



function findProductByID(Products, id) {
    return Products.find(product => product.id === id);
}

function filterProductByStock(Products, stock) {
    return Products.filter(product => product.stock < stock);
}

function updateStock(Products, id, newStock) {
    return Products.map(product =>
        product.id === id ? { ...product, stock: newStock } : product
    );
}

console.log(filterProductByStock(Products, 10));
console.log(updateStock(Products, 1, 9999));
