const basket = ['apples', 'oranges', 'mangos'];
const detailedBasket = {
    apples: 5,
    oranges: 25,
    mangos: 1100
}

// for loop
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// forEach
basket.forEach(item => {
    console.log(item);
})

// for of
// Iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties
// enumerating - objects
for (item in detailedBasket) {
    console.log(item)
}