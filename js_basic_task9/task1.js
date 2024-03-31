/* Створити функцію, яка приймає два параметри - рядок, та кількість секунд.
В середині створеної функції, використовуючи SetTimeout(), зробіть так щоб переданий у функцію текст
 виводився через передану кількість секунд.
Щоб можна було ось так викликати функцію: */


export function printTextWithDelay(text, seconds) {
    setTimeout(function () {
        console.log("My text: ", text, "Delay: ",  seconds);
    }, seconds * 1000);
}

/* printTextWithDelay("My text in seconds", 5) */    /* uncomment for task1  */ 