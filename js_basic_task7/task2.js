/* Завдання 2(task2.js)
Створити 2 об'єкти через new Object();, до кожного об'єкту додати як мінімум 3 властивості та 1 метод.
Приклади об'єктів: person, car, book, phone, city, building etc... */


 let person = new Object()
  person.firstName = "Andriy"
  person.secondName = "Brodskyy"
  person.age = 36
  person.getInfo = function () {
      return `First name is: ${this.firstName}, Second name is : ${this.secondName}, Age: ${this.age}`
    };
    
let city = new Object();
city.name = "Lviv";
city.population = 8501552;
city.country = "Ukraine";
city.getInfo = function () {
    return "City: ${this.name}, Population: ${this.population}, Country: ${this.country}"
};

console.log(city.getInfo)