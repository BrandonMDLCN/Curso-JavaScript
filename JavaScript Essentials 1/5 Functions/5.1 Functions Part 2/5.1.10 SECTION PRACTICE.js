/*
Compirme lo mas que puedas el siguiente codigo
let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
         retVal = -1;
     } else if(a > b) {
         retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]
*/

let numbers = [50, 10, 40, 30, 20];
let compareNumbers = (a,b) => a < b ? retVal = -1 : retVal = 1;
let sorted = numbers.sort(compareNumbers);
console.log(sorted); // [10, 20, 30, 40, 50]

//----------------------------------------------------------------//
//Cisco
let sorteda = numbers.sort((a, b) => b - a);
console.log(sorteda); // [10, 20, 30, 40, 50]

/*
Exercise 2: Write three functions with the names add, sub, and mult, which will take two numerical arguments. 
The functions are to check if the given arguments are integers (use Number.isInteger). 
If not, they return NaN, otherwise they return the result of addition, subtraction, or multiplication respectively. 
The functions are to be declared using a function statement.
*/
let add = (a,b) => !(Number.isInteger(a)) || !(Number.isInteger(b)) ? NaN : a + b;
let sub = (a,b) => !(Number.isInteger(a)) || !(Number.isInteger(b)) ? NaN : a - b;
let mult = (a,b) => !(Number.isInteger(a)) || !(Number.isInteger(b)) || b === 0 ? NaN : a * b;
let div = (a,b) => !(Number.isInteger(a)) || !(Number.isInteger(b)) ? NaN : a / b;


console.log(add(5,6));
console.log(add(5,6.5));

console.log(sub(5,6));
console.log(sub(5,6.5));

console.log(mult(5,6));
console.log(mult(5,6.5));

console.log(div(5,6));
console.log(div(5,6.5));

//----------------------------------------------------------------//
//Cisco
function add(a, b) { if (!Number.isInteger(a) || !Number.isInteger(b)) { return NaN; } return a + b; } 
function sub(a, b) { if (!Number.isInteger(a) || !Number.isInteger(b)) { return NaN; } return a - b; } 
function mult(a, b) { if (!Number.isInteger(a) || !Number.isInteger(b)) { return NaN; } return a * b; }

let add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
let sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
let mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

/*
Exercise 4: Write an action function that will take the callback function as its first argument 
and the other two arguments as numbers. As a callback function, you will be able to pass one of the three functions 
from the previous task.
*/
let action = (func, a,b) => func(a,b);

console.log(action(add, 12, 10)); // -> 22
console.log(action(sub, 12, 10)); // -> 2
console.log(action(mult, 10, 10.1)); // -> NaN

/*
Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, 
in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
*/

let counter = 1;
let intervalId = setInterval(function () {
    console.log(counter++);
}, 2000);
setTimeout(function () {
    clearInterval(intervalId)
}, 20000);

//Exercise 6: Write a function that will calculate the n-th element of the Fibonacci sequence. 
let fibbRec = function (n) {
    let retVal = 0;
    if (n != 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

console.log(fibbRec(10)); // -> 55