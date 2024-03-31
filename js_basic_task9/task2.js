import { printTextWithDelay } from './task1.js';


async function executeWithDelay(text, seconds) {
    printTextWithDelay(text, seconds);
    await new Promise(resolve => setTimeout(resolve, seconds * 1000))
    console.log("Thank you I am fine")
    }

executeWithDelay("Hello John how are you?", 2) 