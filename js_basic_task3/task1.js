let dataForCheck = "hi Jack how are you?"
let vowels = ["a", "i", "e", "u", "y", "o"]
let dataOut = ""

for (let i = 0; i < dataForCheck.length; i++) 
{
    if (vowels.includes(dataForCheck[i])){
       dataOut = dataOut + "*"
    } else {
    dataOut = dataOut + dataForCheck[i]
    }
}
console.log(dataOut)