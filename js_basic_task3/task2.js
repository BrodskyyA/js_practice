let baseString = "hi % %jo%hn he%re %is you %";
let symbol = "%" 
let outPut = ""
for (let i = 0; i < baseString.length; i ++) {
    if(baseString[i] === symbol) {
        outPut = outPut + "*"
    } else {
       outPut = outPut + baseString[i]
    }
} 
console.log (outPut)
