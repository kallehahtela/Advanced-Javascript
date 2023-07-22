// original
const flattened1 = [[0, 1], [2, 3], [4, 5]].reduce(
    (a, b) => a.concat(b), []);

// debuged
const flattened2 = [[0, 1], [2,3], [4, 5]].reduce(
    (accumulator, array) =>  {
        debugger;
        return accumulator.concat([0, 1])
}, []);

// 1. read it
// 2. change the names if it helps to understand it