import { Ipattern } from "../interfaces";

const arg = process.argv.slice(2);
const numOfRow = arg[0];
let equilateral: Ipattern;
// equilateral(numOfRow);  // calling equilateral function
let i = 0;
let j = 0;
export default equilateral = (numOfRow) => {

// check number is less than or equal to 2 and greater than or equal to 10

if (numOfRow >= 2 && numOfRow <= 10) {
    for (i = 0; i < numOfRow; i++) {
        for (j = 0; j < numOfRow; j++) {
            if (j < numOfRow - i) {
                process.stdout.write(" ");
            } else {
                process.stdout.write(" *");
            }

        }
        process.stdout.write("\n");
    }
} else {
    console.log(" Please enter correct number (number should be >=2 and <=10 )");
}

};
