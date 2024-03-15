/* [1,2,3,0] = true - includes all numbers between 0 and arr.length  */

let arrIn = [0,1,2,2,3]          

function checker(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(i)
    }
    for (let i = 0; i < arr.length; i++) {
        if (arrIn.includes(newArr[i]) == false) return false
    }
    return true
}
console.log(checker(arrIn))