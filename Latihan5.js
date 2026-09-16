const products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        rating: 4.5,
        stock: 10,
        category: "laptops",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 30, height: 2, depth: 20 },
        reviews: [
            { user: "A", rating: 5, comment: "Good product" },
            { user: "B", rating: 4, comment: "Worth it" }
        ]
    },
    {
        id: 2,
        title: "Smartphone",
        price: 800,
        rating: 4.2,
        stock: 15,
        category: "phones",
        tags: ["mobile", "electronics"],
        dimensions: { width: 7, height: 0.8, depth: 15 },
        reviews: [
            { user: "C", rating: 4, comment: "Nice camera" },
            { user: "D", rating: 5, comment: "Fast" },
            { user: "E", rating: 3, comment: "Battery so-so" }
        ]
    },
    {
        id: 3,
        title: "Tablet",
        price: 500,
        rating: 4.3,
        stock: 20,
        category: "tablets",
        tags: ["mobile", "electronics", "portable"],
        dimensions: { width: 17, height: 0.6, depth: 25 },
        reviews: [
            { user: "F", rating: 4, comment: "Great for reading" },
            { user: "G", rating: 5, comment: "Smooth performance" }
        ]
    },
    {
        id: 4,
        title: "Smartwatch",
        price: 250,
        rating: 4.1,
        stock: 30,
        category: "wearables",
        tags: ["fitness", "electronics", "accessory"],
        dimensions: { width: 4, height: 1.2, depth: 4 },
        reviews: [
            { user: "H", rating: 4, comment: "Accurate tracking" }
        ]
    },
    {
        id: 5,
        title: "Wireless Earbuds",
        price: 150,
        rating: 4.4,
        stock: 40,
        category: "audio",
        tags: ["music", "electronics", "portable"],
        dimensions: { width: 5, height: 3, depth: 5 },
        reviews: [
            { user: "I", rating: 5, comment: "Great sound quality" },
            { user: "J", rating: 4, comment: "Comfortable fit" }
        ]
    },
    {
        id: 6,
        title: "Bluetooth Speaker",
        price: 90,
        rating: 4.0,
        stock: 25,
        category: "audio",
        tags: ["music", "electronics", "portable"],
        dimensions: { width: 10, height: 10, depth: 10 },
        reviews: [
            { user: "K", rating: 4, comment: "Loud and clear" }
        ]
    },
    {
        id: 7,
        title: "Gaming Console",
        price: 500,
        rating: 4.7,
        stock: 12,
        category: "gaming",
        tags: ["games", "electronics", "entertainment"],
        dimensions: { width: 30, height: 10, depth: 25 },
        reviews: [
            { user: "L", rating: 5, comment: "Amazing graphics" },
            { user: "M", rating: 5, comment: "Worth every penny" }
        ]
    },
    {
        id: 8,
        title: "4K Monitor",
        price: 350,
        rating: 4.3,
        stock: 18,
        category: "monitors",
        tags: ["display", "electronics", "office"],
        dimensions: { width: 60, height: 40, depth: 8 },
        reviews: [
            { user: "N", rating: 4, comment: "Crisp display" }
        ]
    },
    {
        id: 9,
        title: "Mechanical Keyboard",
        price: 120,
        rating: 4.6,
        stock: 22,
        category: "accessories",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 44, height: 3, depth: 14 },
        reviews: [
            { user: "O", rating: 5, comment: "Satisfying clicks" },
            { user: "P", rating: 4, comment: "Great build quality" }
        ]
    },
    {
        id: 10,
        title: "Wireless Mouse",
        price: 40,
        rating: 4.2,
        stock: 50,
        category: "accessories",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 6, height: 3, depth: 11 },
        reviews: [
            { user: "Q", rating: 4, comment: "Smooth tracking" }
        ]
    },
    {
        id: 11,
        title: "Webcam",
        price: 80,
        rating: 4.1,
        stock: 28,
        category: "accessories",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 5, height: 5, depth: 6 },
        reviews: [
            { user: "R", rating: 4, comment: "Good for video calls" }
        ]
    },
    {
        id: 12,
        title: "External Hard Drive",
        price: 110,
        rating: 4.4,
        stock: 35,
        category: "storage",
        tags: ["computer", "electronics", "storage"],
        dimensions: { width: 8, height: 1.5, depth: 12 },
        reviews: [
            { user: "S", rating: 5, comment: "Reliable storage" },
            { user: "T", rating: 4, comment: "Fast transfer speed" }
        ]
    },
    {
        id: 13,
        title: "SSD Drive",
        price: 130,
        rating: 4.6,
        stock: 32,
        category: "storage",
        tags: ["computer", "electronics", "storage"],
        dimensions: { width: 7, height: 0.7, depth: 10 },
        reviews: [
            { user: "U", rating: 5, comment: "Super fast boot time" }
        ]
    },
    {
        id: 14,
        title: "Wi-Fi Router",
        price: 100,
        rating: 4.0,
        stock: 20,
        category: "networking",
        tags: ["internet", "electronics", "office"],
        dimensions: { width: 20, height: 5, depth: 15 },
        reviews: [
            { user: "V", rating: 4, comment: "Stable connection" }
        ]
    },
    {
        id: 15,
        title: "Printer",
        price: 200,
        rating: 3.9,
        stock: 15,
        category: "office",
        tags: ["printing", "electronics", "office"],
        dimensions: { width: 40, height: 25, depth: 35 },
        reviews: [
            { user: "W", rating: 4, comment: "Prints fast" },
            { user: "X", rating: 3, comment: "Ink runs out quickly" }
        ]
    },
    {
        id: 16,
        title: "Digital Camera",
        price: 700,
        rating: 4.5,
        stock: 10,
        category: "cameras",
        tags: ["photography", "electronics"],
        dimensions: { width: 12, height: 8, depth: 6 },
        reviews: [
            { user: "Y", rating: 5, comment: "Excellent image quality" },
            { user: "Z", rating: 4, comment: "Good for beginners" }
        ]
    },
    {
        id: 17,
        title: "Drone",
        price: 900,
        rating: 4.3,
        stock: 8,
        category: "gadgets",
        tags: ["photography", "electronics", "outdoor"],
        dimensions: { width: 35, height: 10, depth: 35 },
        reviews: [
            { user: "AA", rating: 4, comment: "Stable flight" }
        ]
    },
    {
        id: 18,
        title: "VR Headset",
        price: 400,
        rating: 4.2,
        stock: 14,
        category: "gaming",
        tags: ["games", "electronics", "entertainment"],
        dimensions: { width: 20, height: 12, depth: 15 },
        reviews: [
            { user: "AB", rating: 4, comment: "Immersive experience" },
            { user: "AC", rating: 5, comment: "Great for gaming" }
        ]
    },
    {
        id: 19,
        title: "Action Camera",
        price: 300,
        rating: 4.4,
        stock: 16,
        category: "cameras",
        tags: ["photography", "electronics", "outdoor"],
        dimensions: { width: 6, height: 4, depth: 3 },
        reviews: [
            { user: "AD", rating: 5, comment: "Great for adventures" }
        ]
    },
    {
        id: 20,
        title: "Power Bank",
        price: 50,
        rating: 4.1,
        stock: 60,
        category: "accessories",
        tags: ["mobile", "electronics", "portable"],
        dimensions: { width: 7, height: 1.5, depth: 14 },
        reviews: [
            { user: "AE", rating: 4, comment: "Charges quickly" }
        ]
    },
    {
        id: 21,
        title: "Smart TV",
        price: 950,
        rating: 4.6,
        stock: 9,
        category: "electronics",
        tags: ["entertainment", "display", "home"],
        dimensions: { width: 120, height: 70, depth: 8 },
        reviews: [
            { user: "AF", rating: 5, comment: "Amazing picture quality" },
            { user: "AG", rating: 4, comment: "Smooth smart interface" }
        ]
    },
    {
        id: 22,
        title: "Home Theater System",
        price: 600,
        rating: 4.3,
        stock: 11,
        category: "audio",
        tags: ["music", "entertainment", "home"],
        dimensions: { width: 50, height: 20, depth: 30 },
        reviews: [
            { user: "AH", rating: 4, comment: "Powerful bass" }
        ]
    },
    {
        id: 23,
        title: "Graphics Card",
        price: 750,
        rating: 4.7,
        stock: 7,
        category: "computer parts",
        tags: ["computer", "gaming", "electronics"],
        dimensions: { width: 28, height: 4, depth: 12 },
        reviews: [
            { user: "AI", rating: 5, comment: "Handles games at high FPS" },
            { user: "AJ", rating: 5, comment: "Great for rendering" }
        ]
    },
    {
        id: 24,
        title: "Gaming Chair",
        price: 220,
        rating: 4.2,
        stock: 19,
        category: "furniture",
        tags: ["gaming", "office", "comfort"],
        dimensions: { width: 70, height: 130, depth: 70 },
        reviews: [
            { user: "AK", rating: 4, comment: "Very comfortable" }
        ]
    },
    {
        id: 25,
        title: "Desk Lamp",
        price: 35,
        rating: 4.0,
        stock: 45,
        category: "furniture",
        tags: ["office", "home", "lighting"],
        dimensions: { width: 10, height: 40, depth: 15 },
        reviews: [
            { user: "AL", rating: 4, comment: "Good lighting adjustment" }
        ]
    },
    {
        id: 26,
        title: "USB Hub",
        price: 25,
        rating: 4.1,
        stock: 55,
        category: "accessories",
        tags: ["computer", "electronics", "office"],
        dimensions: { width: 10, height: 1, depth: 4 },
        reviews: [
            { user: "AM", rating: 4, comment: "Useful and compact" }
        ]
    },
    {
        id: 27,
        title: "Microphone",
        price: 150,
        rating: 4.5,
        stock: 17,
        category: "audio",
        tags: ["recording", "electronics", "office"],
        dimensions: { width: 8, height: 20, depth: 8 },
        reviews: [
            { user: "AN", rating: 5, comment: "Crystal clear audio" },
            { user: "AO", rating: 4, comment: "Good for streaming" }
        ]
    },
    {
        id: 28,
        title: "Projector",
        price: 480,
        rating: 4.3,
        stock: 13,
        category: "electronics",
        tags: ["entertainment", "display", "office"],
        dimensions: { width: 25, height: 10, depth: 20 },
        reviews: [
            { user: "AP", rating: 4, comment: "Sharp projection" }
        ]
    },
    {
        id: 29,
        title: "Fitness Tracker",
        price: 70,
        rating: 4.2,
        stock: 38,
        category: "wearables",
        tags: ["fitness", "electronics", "accessory"],
        dimensions: { width: 2, height: 1, depth: 20 },
        reviews: [
            { user: "AQ", rating: 4, comment: "Tracks steps accurately" }
        ]
    },
    {
        id: 30,
        title: "E-reader",
        price: 130,
        rating: 4.4,
        stock: 24,
        category: "electronics",
        tags: ["reading", "portable", "electronics"],
        dimensions: { width: 12, height: 0.8, depth: 16 },
        reviews: [
            { user: "AR", rating: 5, comment: "Easy on the eyes" },
            { user: "AS", rating: 4, comment: "Long battery life" }
        ]
    }
];


const electronicsPrices = products
    .filter(p => p.category === "electronics")
    .map(p => p.price);

const avg = electronicsPrices.reduce((sum, price) => sum + price, 0) / electronicsPrices.length;

    console.log("Average price of electronics:", avg);


function getStatistics(products) {
    const totalProducts = products.length;
    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);
    const highestPrice = products.reduce((max, product) => product.price > max ? product.price : max, 0);
    const lowestPrice = products.reduce((min, product) => product.price < min ? product.price : min, Infinity);
    const averagePrice = products.reduce((sum, product) => sum + product.price, 0) / totalProducts;
    const averageRating = products.reduce((sum, product) => sum + product.rating, 0) / totalProducts;
    return { 
        totalProducts, 
        averagePrice, 
        highestPrice, 
        lowestPrice, 
        totalStock, 
        averageRating 
    };
}

console.log(`ringkasan produk:
    - Total Products: ${getStatistics(products).totalProducts}
    - Average Price: ${getStatistics(products).averagePrice.toFixed(2)}
    - Highest Price: ${getStatistics(products).highestPrice}
    - Lowest Price: ${getStatistics(products).lowestPrice}
    - Total Stock: ${getStatistics(products).totalStock}
    - Average Rating: ${getStatistics(products).averageRating.toFixed(2)}`);