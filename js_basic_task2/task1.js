let grossIncome = 10000
let tax;

if (grossIncome < 10000) {
   tax = 5;
} else if (grossIncome >= 10000 && grossIncome <= 50000) {
   tax = 10;
}  else if (grossIncome > 50001 && grossIncome <= 100000) {
   tax = 15;
} else if (grossIncome > 100001 && grossIncome <= 200000) {
   tax = 20;
} else {
   tax = 25;
}
console.log("Базовий дохід:", grossIncome,  "Відсоток податку:", tax, "Дохід після вирахування податків:", (grossIncome-(grossIncome/100*tax)));