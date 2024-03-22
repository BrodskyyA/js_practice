/* Завдання 1(task1.js) Створити 3 об'єкти через {}, кожен об'єкт повинен мати як мінімум 3 властивості і 2 методи.
Приклади об'єктів: person, car, book, phone, city, building etc... */

const person = {
    name: {
        firstName: "Andriy",
        secondName: "Brodskyy",
    },  
    age: 35,
    addressInfo : {
        city: "Lviv",
        street: "Zelena str",
        zipCode: "79039",
    },
    isAnniversaryAge() {
        if (this.age % 10 == 0) return true
        else return false
    },
    getPersonData() {
        return "Person full name: " + this.name.firstName + " " + this.name.secondName + " age: " + this.age
    }
}

console.log(person.isAnniversaryAge())
console.log(person.getPersonData())

