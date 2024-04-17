/*
The syntax of the for loop is a bit more complicated and looks as follows:

for (initialization; condition; increment) {
    block of code
}

The inside of the parentheses is divided into three fields by semicolons, and each field is assigned a different meaning. 
In each of these fields, a statement may appear, which will be interpreted as follows in the order:

loop initialization statement;
loop condition statement;
loop increment statement.

0 to 9
*/
for (let i = 0; i < 10; i++) {
    console.log(i);
}

/*
As shown in the syntax of the for loop, there are three expressions inside the parentheses. 
The let i = 0 is an initialization, i < 10 is a condition, and i++ is an increment.

Suma de array
*/
let values = [10, 30, 50, 100];
let sum = 0;
for (let i = 0; i < 4; i++) {
    sum += values[i];
}
console.log(sum); // -> 190

//-----------------------------------//

let valuess = [10, 30, 50, 100];
let sums = 0;
for (let i = 0; i < valuess.length; i++) {
    sums += valuess[i];
}
console.log(sums); // -> 190
