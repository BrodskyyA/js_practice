/* Завдання 2(task2.js)
/* Використовуючи замикання, створіть функцію divider, яка приймає дільник(число, на яке треба ділити) 
та повертає іншу функцію, яка у свою чергу приймає ділене(число, яке потрібно поділити на дільник) та повертає результат ділення */


function divider(dividerValue) {
    return function (number) { 
        return number / dividerValue
    }
}  
const double = divider(5)

console.log(double(10))
console.log(double(20))