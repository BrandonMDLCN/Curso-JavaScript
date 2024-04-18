/*------------------------------ 5.1.2 Recursion ------------------------------*/
/*
1. Recursion is a programming technique that allows a function to call itself.

During your math lessons, you probably came across the concept of factorials. 
A factorial is a function, indicated by an exclamation mark in mathematical notation.
We pass an integer to this function and its result is obtained by multiplying 
all integers from the number 1 to the number given as an argument.
So, for example, the factorial of 6 is:

6!=6∙5∙4∙3 ∙2∙1=720
*/
function factorial (n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720

/*
In this case, we use the iterative approach to calculate the factorial, in other words, 
we use a loop in which, during each iteration we multiply the previous result by another element of the sequence.

However, the definition of a factorial can be written in a slightly different way. 
It will be the factorial of the previous element n - 1 multiplied by n.
For example, 6! is 5! multiplied by 6.

Such a factorial definition uses the recursion, i.e. referring a function to itself (but with a different argument).

A recursion is a mechanism that allows to simplify the formal notation of many mathematical functions 
and present them in an elegant form. We can also successfully use recursion in programming.

Let's declare the factorial function again, this time using recursion.
*/

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720

/*
In order to get a shorter, more compact code, instead of an if conditional instruction, 
we use the ternary conditional operator.
In it, we check if the argument n is greater than 1.
Depending on that, we return either the result of multiplying the number n by the result 
of the factorial(n – 1) call, or the value 1.

Recursion is commonly used in programming. However, as with any solution, recursion must be handled with care. 
We shouldn't use it where we can't estimate the number of embedded calls.

We should also be very careful in formulating the condition that will interrupt the 
function sequence calls – errors can cause the program to suspend.
*/