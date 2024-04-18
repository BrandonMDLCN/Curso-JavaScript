/*
A function statement starts with the function keyword followed by the function name. 
Function names need to follow the same rules as variable names, and should also be meaningful.

After the function name, there are parentheses that can optionally have function parameters, which we’ll discuss in a while. 
After the parentheses comes the function body, which is made from any number of statements (a code block).

So let's try to declare a function according to these rules, 
which will contain a fragment of our program code calculating the mean daily temperature. 

We will call it getMeanTemp. 
For now, the function will use variables, declared outside of it (in the surrounding context). 
In fact, it is practically never done that way, but we will deal with it at one of the subsequent stages.
*/
let temperatures;
let sum;
let meanTemp;
 
function getMeanTemp() {
     sum = 0;
     for (let i = 0; i < temperatures.length; i++) {
         sum += temperatures[i];
     }
     meanTemp = sum / temperatures.length;    
}

/*-------------------- 5.0.3 Calling functions --------------------*/
//To call a function, we need to write a function name and follow it with parentheses

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 16.666666666666668
temperatures = [17, 16, 14, 12, 10, 10, 10, 11, 13, 14, 15, 17, 22, 27, 29, 29, 27, 26, 24, 21, 19, 18, 17, 16];
getMeanTemp();
console.log(`mean: ${meanTemp}`); // -> mean: 18.083333333333332

/*
Each call causes the program to jump into the function code, execute its instructions and return to the next instruction after the function call.

Usually, functions are declared before they are called, mostly at the beginning of the code. 
However, this is only a good practice, which increases the readability of the code, not a JavaScript syntax requirement. 
Function declarations are automatically moved to the top of the scope, so we can use them before the declaration, as long as they are in the scope.

So the code:
*/
var name = Alice
 
function showName() {
     console.log(name);
}
 
showName(); // -> Alice

//will work exactly the same as:
var name = Alice
 
showName(); // -> Alice
 
 
function showName() {
     console.log(name);
}
