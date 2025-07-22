/*--------------------- 3.3.4 Math ---------------------*/

/* 
The Math object, like JSON, is not a constructor, but an ordinary object.

We don't create it, we just refer to it by name and choose a specific method or property to use it.

It contains mathematical methods and constants.

We recommend that you take a look at the MDN page8 to see what mathematical functions it offers.

8Math - Javascript built-in object
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Math allows the use of several mathematical constants, the most important of which are the numbers π (pi) and e (the base of the natural logarithm).
*/

console.log(Math.PI); // -> 3.141592653589793
console.log(Math.E); // -> 2.718281828459045

/*
The vast majority of the methods provided by Math are very simple to use and should be familiar to you from mathematics lessons.

We will list them here, with short descriptions and examples of use.
*/

/*--------------------- 3.3.5 Rounding ---------------------*/

/* 
Some of the most commonly used methods are ceil, floor, and round.

The ceil method rounds the given number up to the first integer greater than the one given in the argument.

The floor method rounds down to the first integer less than the one given.

The round method rounds the figure according to the rules of arithmetic (up if the decimal fraction is equal to or greater than 0.5, down if not).

Look at the code below:
*/

console.log(Math.ceil(10.2)); // -> 11
console.log(Math.floor(10.2)); // -> 10
console.log(Math.round(10.2)); // -> 10
console.log(Math.ceil(10.499999)); // -> 11 
console.log(Math.floor(10.499999)); // -> 10
console.log(Math.round(10.499999)); // -> 10
console.log(Math.ceil(10.5)); // -> 11
console.log(Math.floor(10.5)); // -> 10
console.log(Math.round(10.5)); // -> 11
console.log(Math.ceil(10.8)); // -> 11
console.log(Math.floor(10.8)); // -> 10
console.log(Math.round(10.8)); // -> 11


/*--------------------- 3.3.6 Drawing numbers ---------------------*/

/* 
In practice, the method often used is random.

It is used to generate pseudo-random numbers.

After calling it, it generates a real value from 0 (inclusive) to maximum 1 (excluding 1).
*/

console.log(Math.random()); // -> ?

/*
We don’t often need a random value in the range from 0 to 1.

Typically, we will need integers in a certain range.

In order to get them, we have to write a piece of our own code.

The following randomInteger function allows you to generate integers from min to max (excluding the max value).

It provides a uniform distribution of random values (theoretically, the probability of drawing each integer from a given range should be the same).
*/

let randomInteger = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min) + _min);
}
console.log(randomInteger(10,20)); // -> ?

/*
If our function is to allow us to draw numbers from the same range of min and max, but this time allowing us to draw a max as well, we need to modify it slightly.
*/

let randomIntegero = (min, max) => {
    let _min = Math.ceil(min);
    let _max = Math.floor(max);
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
}
console.log(randomIntegero(10,20)); // -> ?


/*--------------------- 3.3.7 Other useful methods ---------------------*/

/* 
The abs method returns an absolute value from the given number.
*/

console.log(Math.abs(-3.25)); // -> 3.25
console.log(Math.abs(10)); // -> 10

/*
The min and max methods, as you can guess, are used to search for the smallest or the largest value among the given values.


Note that in the example for the max method we used the spread operator to transform the array into individual elements which will be treated as arguments.
*/

console.log(Math.min(100, 20, 300, 10, 400)); //10
let numbers = [100, 20, 300, 10, 400];
console.log(Math.max(...numbers)); //400

/*
We also have at our disposal, among others, the pow and sqrt methods (i.e. power and square root) 
and log, log2, and log10 (i.e. natural logarithm, logarithm at base 2, and decimal logarithm).

Look at the code below:
*/

Console.log(Math.pow(2, 3)); // -> 8 => 2^3
console.log(Math.pow(4, 2)); // -> 16 => 4^2
console.log(Math.pow(4, -1)); // -> 0.25 => 4^-1 = 1/4^1 
console.log(Math.pow(4, -2)); // -> 0.0625 => 4^-2 = 1/4^2 
console.log(Math.pow(4, 0.5)); // -> 2 => 4^0.5 = 4^(1/2) = √(2&4)
console.log(Math.pow(-1,0.5)); // -> NaN => -1^0.5 = √(2&-1)
console.log(Math.sqrt(4)); // -> 2
let x = Math.pow(Math.E, 2); // -> 7.3890560989306495
console.log(Math.log(x)); // -> 2
console.log(Math.log2(16)); // -> 4
console.log(Math.log10(1000)); // -> 3

/*
Trigonometric functions are also represented in large numbers (eg. Sin, cos, atan, cosh).

You must remember that in JavaScript, they don’t operate on degrees, but on radians.

Look at the code below:
*/

console.log(Math.cos(Math.PI/3));
console.log(Math.tan(Math.PI/4));
console.log(Math.asin(1));

/*
The methods presented do not exhaust what is available in the Math object. Our goal is only to briefly familiarize you with the most popular.

Remember what we mentioned while discussing the Number constructor – the JavaScript language was not invented for complex mathematical calculations.

So don’t expect to use it to make serious scientific analyses.
*/