/*
In JavaScript, functions are first-class members. 
This term means that functions can be treated as any data, which can be stored in variables or passed 
as arguments to other functions. 

For example, we can declare the showMessage function and then store it in the variable sm.
*/
function showMessage(message) {
    console.log(`Message: ${message}`);
}

let sm = showMessage;

// We can store any function that is accessible in this scope in a variable and use a function call operator () 
// to execute it. We can check that the sm variable is now a function by using the typeof operator.

sm("This works!"); // -> Message: This works!
console.log(typeof sm); // -> function

/*
But it’s important to remember that when assigning a function to a variable, 
we don't use a function call operator, as this would execute the function and assign the result 
of the function to a variable, and not to the function itself.
*/
function doNothing() {
    return undefined;
}

let a = doNothing(); // assign result of function call
let b = doNothing;   // assign a function

console.log(typeof a); // -> undefined
console.log(typeof b); // -> function

/*
the result of the doNothing function call (i.e. the undefined value returned by the function) 
is stored in the a variable, 
while the doNothing function itself is stored in the b variable 
(or more precisely, a reference to the function is stored in the b variable).
*/
function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function operation(func, first, second) {
    return func(first, second);
}

console.log(operation(add, 10, 20)); // -> 30
console.log(operation(multiply, 10, 20)); // -> 200

// The operation function takes as its first argument the function (parameter func) 
// and calls it with the other two arguments passed (parameters first and second).