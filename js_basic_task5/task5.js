/* [1 , 2 , "123", "12313"] => [1, 2]    */

let arr = [1 , 2 , 3, -5151, "sfsfsdf", "sfsdf"]

console.log(arr.filter(item => typeof item === 'number'));