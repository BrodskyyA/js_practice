let numberStart = 888
let numberFinish= 1500

for (let i = Math.min(numberStart,numberFinish); i <= Math.max(numberStart,numberFinish); i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
} 