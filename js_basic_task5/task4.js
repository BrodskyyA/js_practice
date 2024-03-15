/* Напишіть функцію, яка приймає 3 параметри-оцінки: математика, література, фізика. Кожен від 1 до 100.
В функції порахуйте середній бал і поверніть(return) наступний рядок в залежності від середнього балу:

1-49 - Low performance
50-69 - Medium performance
70-89 - Good performance
90-100 - Very good perfomance */

let mathMark = 100
let litMark = 12
let physMark = 50

function perfomance(math, lit, phys) {
    let averageMark = (math + lit + phys) / 3
    if (averageMark >= 1 && averageMark <= 49) return "Low performance"
    if (averageMark >= 50 && averageMark <= 69) return "Medium performance"
    if (averageMark >= 70 && averageMark <= 89) return "Good performance"
    if (averageMark >= 90 && averageMark <= 100) return "Good performance"
    else return "ERROR"
}
console.log(perfomance(mathMark, litMark, physMark))