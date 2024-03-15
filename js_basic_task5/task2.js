/* Напишіть функцію, яка приймає масив чисел в якості аргументу і повертає новий масив, в якому кожен елемент буде піднесений до квадрата. */

let arrInput = [1, 2, 4, 10, 5, 6]
let arrOut = []

function square(arr) {
    for(let i = 0 ; i < arr.length; i++) {
        arrOut.push(arr[i] * arr[i])
    } return arrOut
}
console.log(square(arrInput))
