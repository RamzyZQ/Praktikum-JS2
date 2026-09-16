const number = 1000;

if (number <= 9) {
    console.log("Satuan");
} else if (number <= 99) {
    console.log("Puluhan");
} else if (number <= 999) {
    console.log("Ratusan");
} else {
    console.log("1000");
}