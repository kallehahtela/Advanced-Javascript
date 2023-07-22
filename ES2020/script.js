// ES2020
// BigInt
// Nullish Colescing Operator ??
// Optional Chaining Operator ?.

console.log(Number.MAX_SAFE_INTEGER) // console shows the largest safe integer possible, if your want to modify that number over it use BigInt 'n' after number

let jari_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

//let jari_weight = jari_pokemon.pikachu.weight
//console.log('weight', jari_weight)

let pekka_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 1,
        weight: 60,
        power: ''
    }
}

// NOT LIKE THIS
// if (pekka_pokemon.raichu && pekka_pokemon.weight) {
//    let pekka_weight = pekka_pokemon.raichu.weight
//     console.log(pekka_weight);
//} else {
//    let pekka_weight = undefined
//    console.log(pekka_weight);
//}

// Optional Chaining Operator
let pekka_weight1 = pekka_pokemon?.raichu?.weight
console.log(pekka_weight1);

// Nullish Colescing Operator ??
let power = pekka_pokemon?.raichu?.power ?? 'no power'
console.log(power);
