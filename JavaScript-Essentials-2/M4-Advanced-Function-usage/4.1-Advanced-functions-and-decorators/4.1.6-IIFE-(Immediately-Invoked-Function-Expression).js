/*--------------------- 4.1.6 IIFE (Immediately Invoked Function Expression) ---------------------*/

/* 
An interesting design related to functions is the IIFE (Immediately Invoked Function Expression).

It is a design pattern that is useful for when we create a function to be called just once and immediately after defining it.

The pattern is as follows:
*/

(function(){
    // function body
})();

/*
Firstly, we define an anonymous function (the name isn’t needed, as we won’t refer to it again).

Secondly, we call it by enclosing the definition in parentheses and adding another set of parentheses (potentially for arguments).

The function is called as soon as it is defined.
*/

(function(msg){
    console.log(msg);
})('test IIFE'); // -> test IIFE

/*
You are probably asking yourself: why use such a method if exactly the same effect could be achieved much more simply by writing something like this?
*/

let msg = 'test IIFE';
console.log(msg); // -> test IIFE

/*
There are several reasons for this; perhaps the most important is to prevent global variables from "polluting" the global variables namespace.

In larger applications, the number of such variables as msg can be very big.

Additionally, if we start to use ready-made solutions (e.g. libraries) it may turn out that some names will repeat.

The IIFE allows you to close a selected piece of code, potentially even the whole application, and use local variables instead of global ones.

Let's take a look:

(function () {
    let a = 10;
    let b = 20;
    let result;
    let sum = function (x, y) {
        return x + y;
    }
    result = sum(a, b);
    console.log(result); // -> 30
})();
console.log(result); // -> Undefined ReferenceError: result is not defined

Inside our function, we declare the variables a, b, and result.

They are obviously local, so their visibility is limited to the function body.

Outside the function, the result variable can be used for a completely different purpose – in the example it is simply undefined.

Looking through ready-made applications written in JavaScript, you would certainly come across IIFE; sometimes it’s used to encapsulate the application’s entire code.

This technique is often used to separate logical modules that can be treated independently and possibly configured by passing specific call arguments.
*/