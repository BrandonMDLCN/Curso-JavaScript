/*--------------------- 4.1.9 Decorating functions (wrappers, higher order functions) ---------------------*/

/* 
Functions that take another function as an argument or return a function as a result have their own name.

We call them higher-order functions.

Note that many of the methods discussed, (e.g. in the chapter about built-in objects) are higher-order functions.

For example, the forEach method of the Array object takes a function as an argument, which will be called for each element of the array.

There is a specific group of higher-order functions that "wraps" other functions, partially changing their functionality.


These are called decorating functions, or simply decorators.

The concept of decorators is simple, although initially their usefulness may be questionable.

Imagine that we have a function called funA that performs a specific action.

We would like to minimally change it, adding some new functionality (e.g. displaying additional information) depending on the values that funA returns.

Our first instinct is to modify the funA function.

But what if we still want to use the original function in certain parts of the code?

You could make a copy of it, or (and here comes the decorator) write a function that will call funA and additionally perform the action we invented.

Let's take a look at the code below:
*/

let funA = function(a, b) {
    return a + b;
}
let decor = function(fn) {
    return function(arg1, arg2) {
        let result = fn(arg1, arg2);
        console.log(`result ${result}`);
        return result;
    }
}
let funB = decor(funA);
console.log(funA(3, 4)); // -> 7
funB(3, 4); // -> result 7

/*
The funA function is extremely simple: it takes two arguments and returns their sum.

The decor function is a decorator.

Its job is to create a new function that will use funA, but also add something new – display the result of the function in the console.


Calling the decor function returns a new function, which we store in the funB variable.

The function funB is a decorated function of funA – it contains the functionality of funA with the added display of the result in the console.

The example shown demonstrates the decorating technique itself, but it is hard to see it as very practical.

Let's try to find a slightly more sensible use for decorators.

First, we’ll define the factorial function.
*/

let factorialo = function (n) {
    return n > 1 ? factorialo(n-1) * n : 1;
}
console.log(factorialo(3)); // -> 6
console.log(factorialo(5)); // -> 120
console.log(factorialo(10)); // -> 3628800

/*
It is a recursive function, which allows us to calculate the value of the factorial for the given argument n.

As you probably remember, the factorial for the value n is calculated by multiplying the result of the factorial of the element n - 1 
by the value of n (e.g. 5! = 5 * 4! = 5 * 4 * 3! = 5 * 4 * 3 * 2! = 5 * 4 * 3 * 2 * 1 = 120)


As you can guess, calculating the factorial for a larger value of n can be a bit time-consuming.

Additionally, with every call of the function we calculate the power from the beginning.

So, what if we want to store the result calculated for a particular argument and return it without recalculations on the next call?

Let's use a decorator. We leave the factorial function unchanged.

Instead, we add a new function, decor. It will return a new anonymous function that:

checks if it has already been called with the given argument n (pairs of argument n and the result are stored in the results variable of the type Map),
if the function has already been run with the given argument n, we use the stored result, which we return (while displaying information about this fact in the console),
if the function is run for the first time with the given argument n, the decorated function fn (in our example factorial) is called, 
from which the result is stored in the results map;
the result, together with the appropriate information, is displayed in the console and returned.

Look at the code below:
*/

let factorial = function (n) {
    return n > 1 ? factorial(n-1) * n : 1;
}
let decoratoro = function(fn) {
    let results = new Map();
    return function(n) {
        let result = results.get(n);
        if(!result) {
            result = fn(n);
            results.set(n, result);
            console.log(`... calc ${n} -> ${result}`);
        } else {
            console.log(`... found ${n} -> ${result}`);
            }
        return result;
    }
}
let factorial2 = decoratoro(factorial);

/*
We store the decorated function in the variable factorial2.

Let's look at the effect of this function for several arguments.

Note that the function runs recursively until a stored value is found or a value of 1 is reached.

Look at the code:


factorial2(2);
... calc 1 -> 1
... calc 2 -> 2
factorial2(2);
... found 2 -> 2
factorial2(3);
... found 2 -> 2
... calc 3 -> 6
factorial2(10);
... found 3 -> 6
... calc 4 -> 24
... calc 5 -> 120
... calc 6 -> 720
... calc 7 -> 5040
... calc 8 -> 40320
... calc 9 -> 362880
... calc 10 -> 3628800
factorial2(8);
... found 8 -> 40320

As you can see, the value, once calculated, is stored and used in later calls.

We need to check if it really translates into efficiency.

Let's make a small change to the decorator.

Look at the code below:
*/

let decorator = function(fn) {
    let results = new Map();
    return function(n) {
        console.time(n);
        let result = results.get(n);
        if(!result) {
            result = fn(n);
            results.set(n, result);
        }
        console.timeEnd(n);
        return result;
    }
}

/*
We remove the display of information concerning the found or calculated results.

Instead, we take two methods: console.time and console.timeEnd.

We use them like a stopwatch, counting the duration of the function execution.

Theoretically, finding the result for the chosen n in the map, if it was counted before, should be significantly faster than counting it all over again.

Let's check the code here:


factorial2(2);
1: 0.00390625 ms
2: 0.14111328125 ms
factorial2(2);
2: 0.00390625 ms
factorial2(3);
2: 0.001953125 ms
3: 0.114013671875 ms
factorial2(10);
3: 0.001953125 ms
4: 0.138916015625 ms
5: 0.22998046875 ms
6: 0.304931640625 ms
7: 0.381103515625 ms
8: 0.43505859375 ms
9: 0.4931640625 ms
10: 0.552734375 ms
factorial2(8);
8: 0.0078125 ms
factorial2(10);
10: 0.003173828125 ms


As expected, the differences in computation time are substantial.

This is important because the function is recursive, meaning previously calculated values can also be used to speed up calculations for subsequent values of n.

For example, when calculating factorial2(3), we use the fact that factorial2(2) was previously calculated.

There are many ready-made decorator concepts that you can implement yourself, or you can use solutions that are available in programming libraries.

This example is a typical decorator concept – result caching.

Other typical decorators include debounce and throttle.

Imagine a situation where a certain event is generated with high frequency.

This event is associated with a call to a certain handler function.

It may turn out that the frequency is so high that the function is called without interruption; therefore, it doesn’t allow us to execute other parts of the application. 
It could turn out that in fact it would be enough to call only one such function periodically.

This is when decorators come in handy:

debounce – a decorated function may be called many times, but it will be executed only once after the set time since the last call; 
for instance, if we set the time for 100ms and every 50ms we call our function (e.g. 10 times), only the last call after 100ms from this call will be executed 
(earlier calls are ignored);

throttle – we create a new function, decorating the original one so that it will be called at most only once during a specified time interval.
We can write both decorators ourselves, or use ready-made functions from the jQuery, Lodash or Underscore libraries.

They are usually important when optimizing the user interface, so we’ll talk about them more in the next part of the course when we look at front-end programming.
*/