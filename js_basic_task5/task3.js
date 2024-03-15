/* Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає суму всіх чисел у масиві. */

let arrayIn = [3, 4, 5, 6]
let total = 0

function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    } return total
}
console.log(sum(arrayIn))