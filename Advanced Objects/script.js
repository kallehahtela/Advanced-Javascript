// reference type
var object1 = { value: 10};
var object2 = object1;
var object3 = { value: 10};

// context vs scope

// context example
const object4 = {
    a: function() {
        console.log(this);
    }
}

// scope example
function b() {
    let a = 4;
}


// instantiation
class Player {
    constructor(name, age) {
        console.log('Player', this);
        this.name = name;
        this.age = age;
    }
    introduce() {
        console.log(`Hi I'm ${this.name}, I'm a ${this.age}`);
    }
}

class Enemy extends Player {
    constructor(name, age) {
        super(name, age)
        console.log('Enemy', this);
    }
    play() {
        console.log(`WEEEEEEEE I'm a ${this.age}`);
    }
}

const enemy1 = new Enemy('Pekka', '56');
const enemy2 = new Enemy('Jari', '88');