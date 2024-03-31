export class Animal {
    constructor(color, name, type) {
        this.color = color;
        this.name = name;
        this.type = type;
    }
    sayHello() {
        console.log(`Hello, I am ${this.name} the ${this.type}.`);
    }
    run() {
        console.log(`${this.name} is running.`);
    }
}

export class Dog extends Animal {
    constructor(color, name, type, breed, age, sound) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
        this.sound = sound;
    }
    bark() {
        console.log(`${this.name} says ${this.sound}!`);
    }
    fetch() {
        console.log(`${this.name} is fetching.`);
    }
}

export class Cat extends Animal {
    constructor(color, name, type, breed, age, purrSound) {
        super(color, name, type);
        this.breed = breed;
        this.age = age;
        this.purrSound = purrSound;
    }
    purr() {
        console.log(`${this.name} is purring: ${this.purrSound}`);
    }
    sleep() {
        console.log(`${this.name} is sleeping.`);
    }
}