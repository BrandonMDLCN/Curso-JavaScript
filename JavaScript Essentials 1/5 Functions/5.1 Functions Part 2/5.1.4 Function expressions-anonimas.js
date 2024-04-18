/*
To store a function in a variable or pass it as an argument to call a function, 
you do not necessarily have to declare it previously and use its name.

Let's go back to our example with the add function:
*/
function add(a, b) {
    return a + b;
}

let myAdd = add;
console.log(myAdd(10, 20)); 	// -> 30
console.log(add(10, 20));	// -> 30

/*
We first declare the add function, and then store it in the variable myAdd. 
We can call the same function using both the name add and the variable myAdd. 
We can shorten this notation and declare the function by storing it in a variable.
*/
let myAdda = function add(a, b) {
    return a + b;
}

console.log(myAdda(10, 20)); // -> 30
console.log(add(10, 20)); // -> 30

/*
This form of defining a function is called function expression. 

In this case, it is specifically a named function expression, because the function has a name (add). 
If there is a named function expression, there will probably also be an unnamed, or precisely, 
an anonymous function expression. 

In fact, simply remove the name following the function keyword to change the function from named to anonymous.
*/
let myAddas = function(a, b) {
    return a + b;
}

console.log(myAddas(10, 20)); // -> 30

/*
Let's go back to the concept of anonymous functions. 

It may seem a little incomprehensible when you use a name (although it is a variable name) 
to refer to a function. 
In this case, it's about anonymity, i.e. the lack of a name, in the very definition of a function. 
This will be much more evident when passing a function as a call parameter to another function.

Let's look at the example:
*/
function operation(func, first, second) {
    return func(first, second);
}

let myAddo = function(a, b) {
    return a + b;
}

console.log(operation(myAddo, 10, 20)); // -> 30

console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200

/*
In the first step, we declare the function operation (it is a named function, and we use the function statement 
here, so we will refer to the function by its name). 
In the next step, we define an anonymous function, which we store in the myAdd variable 
(we use a function expression). We call the operation function, passing the myAdd function and values 10 and 20 
as arguments.

The result is easy to predict. 
It only gets interesting when we call the operation function again. 
This time, the first argument is the anonymous function (again the function expression), 
which is defined directly in an operation call.

The result is a multiplication, although the name of the new function 
(or the variable in which it could be placed) will not appear anywhere. 
The function has been defined only to pass it once into the operation function. 
At first glance, it may look like a completely useless mechanism, but in the real world, it is used very often.
*/