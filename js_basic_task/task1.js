import chalk from "chalk";

const output = "Hello world";
const hex = chalk.hex("#00ff40")

console.log(chalk.red((output)));
console.log(hex(output));
console.log(chalk.magenta((output)))     
