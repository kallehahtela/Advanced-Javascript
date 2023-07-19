// Pass By Value
var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);

// Pass By Reference
let obj1 = { name: 'Kalle', password: '123'};
let obj2 = obj1;

obj2.password = 'easy';

console.log(obj1);
console.log(obj2);

// with arrays
var c = [1,2,3,4,5];
var d = [].concat(c);
d.push(122343333);

console.log(d);

// with objects
let obj = {a: 'a', b: 'b', c: {deep: 'try and copy me'}};
let clone = Object.assign({}, obj);
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c.deep = 'hahaha';
console.log(obj);
console.log(clone);
console.log(clone2);
console.log(superClone);