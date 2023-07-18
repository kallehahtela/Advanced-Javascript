// Template String

//const name = "Kalle";
//const age = 19;
//const pet = "cat";

// const greetingBest = `Hello ${name} you seem to be ${age}. What a lovely ${pet} do you have`;


// default arguments
function greet(name='', age=19, pet='cat') {
    return `Hello ${name} you seem to be ${age}. What a lovely ${pet} do you have`;
}

// Symbol

var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');

// Arrow Functions
function add(a, b) {
    return a + b;
}

const add2 = (a, b) => a + b;