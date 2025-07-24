/*--------------------- 4.1.8 First-class functions ---------------------*/

/* 
In the previous part of this course you came across the concept of first-class functions.

Let's remind ourselves what is behind this idea.

We say JavaScript functions are first-class functions, or in other words, first-class citizens, because they can be treated as variables.

What does this actually mean?

A function can be stored in a variable; it can be passed as an argument to another function or returned by a function.

This gives us a lot of interesting possibilities.


First, let's look at the simplest examples of using a function as a first-class citizen.

Let's start by placing a function in a variable – take a look at the code below:
*/

let sum = function(a, b) {
    return a + b;
};
console.log(sum(10, 20)); // -> 30

/*
Do you remember what it’s called when we define functions in this way?

It’s a function expression.

The anonymous function (note that there is no function name between the function keyword and the brackets containing the parameters) is substituted into the variable sum.

The function can be called using this variable.

A function can also be treated as an argument passed to another function.

Take a look:
*/

function executeOperation(operation, firstArg, secondArg) {
    return operation(firstArg, secondArg);
}
console.log(executeOperation(sum, 10, 20)); // -> 30

/*
In the example, we define the function excuteOperation, which expects another function to be passed as the first parameter.

Inside executeOperation, the operation function given as the parameter is called and its arguments are the next two parameters of the executeOperation call.

We call executeOperation by passing the previously defined function sum to it.

As we mentioned earlier, a function can also be returned by another function.

This situation is shown here:
*/

function getMultiplyBy(multiplier) {
    return function(a) {
        return a * multiplier;
    }
}
let multiplyBy3 = getMultiplyBy(3);
console.log(multiplyBy3(2)); // -> 6
console.log(getMultiplyBy(5)(10)); // -> 50

/*
The getMultiplyBy function takes a multiplier and returns a function that is used to multiply any number by that multiplier.

Calling getMultiplyBy(3) returns a function that multiplies any argument by three.

In the example, the returned function is stored in the multiplyBy3 variable.

In the last line of the example, we call the getMultiplyBy function once again, this time with an argument of 5.

However, we don't substitute the returned function into any variable, but we call it immediately with an argument of 10.

In this case we are dealing with a typical example of a closing.

The returned function uses the argument a passed to the parent function despite the fact that the parent function has already finished its work.
*/