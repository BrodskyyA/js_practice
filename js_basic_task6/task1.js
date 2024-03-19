/*
Використовуючи рекурсію, напишіть функцію, яка приймає два параметри - start та finish.За допомогою рекурсії, виведіть всі числа від start до finish. */


function recursion(startValue, finishValues) {
    if (startValue <= finishValues) {
        console.log(startValue)
        startValue++
        recursion(startValue, finishValues)
    }
    return
}
recursion(1, 5)