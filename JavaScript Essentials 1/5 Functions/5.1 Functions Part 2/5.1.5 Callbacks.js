/*
Functions that are passed as arguments to other functions may seem quite exotic and not very helpful, 
but in fact, they are a very important part of programming. 

So important that they even get their own name. They are callback functions. 

a function that receives a callback as an argument can call it at any time. 
Importantly, in our examples, the callback is run synchronously, 
that is, it is executed in a strictly defined order resulting from where it is placed among 
the other instructions.

-------------------- Synchronous callbacks --------------------

Synchronous execution is the most natural way to see how the program works. 
Subsequent instructions are executed in the order in which they are placed in the code. 
If you call a function, the instructions in it will be executed at the time of the call. 
If we pass another function to this function as an argument, and we call it inside an outer function as well, 
then all instructions will keep their natural order.
*/
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    callback();
    console.log('outer 2');
    callback();
}

console.log('test 1');
outer(inner);
console.log('test 2');
