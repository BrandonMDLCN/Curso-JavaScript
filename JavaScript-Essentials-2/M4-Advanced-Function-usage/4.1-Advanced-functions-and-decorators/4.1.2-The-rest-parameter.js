/*--------------------- 4.1.2 The rest parameter ---------------------*/

/* 
Another technique related to function parameters is the use of rest parameters.

They allow us to treat arguments passed to the function as an array, which can sometimes be a convenient solution.

This is especially the case when, during the definition of the function, it is difficult to define the exact number of parameters with which it should be called.

This is easier to demonstrate with an example:
*/

function test(...args) {
    let msg = `length: ${args.length}, args:`;
    args.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> length: 3, args: 100 200 300
test(100); // -> length: 1, args: 100

/*
In the test function definition, there is only one parameter: args.

It looks a bit strange since it is preceded by three dots. This is the information to be treated as a rest parameter, which is simply an array. 
We call the function in a traditional way by giving successive arguments.

Inside the function, however, they are treated as an array (individual arguments do not have names – they are just consecutive elements of the args array).

Rest parameters can be used in conjunction with normal parameters.

Two basic rules apply:

only one rest parameter may appear in a function declaration;
the rest parameter must be the last parameter in the declaration.
For example, the following declarations are incorrect:

function test(...a, ...b) {}
function test(...a, c) {}
function test(...a, c, ...b) {}

However, there is no objection to defining and using a function as follows:
*/

function test(firstArg, ...anotherArgs) {
    let msg = `frist arg: ${firstArg}, length: ${anotherArgs.length}, args:`;
    anotherArgs.forEach(arg => {msg += ` ${arg}`});
    console.log(msg);
}
test(100, 200, 300); // -> frist arg: 100, length: 2, args: 200 300
test(100); // -> frist arg: 100, length: 0, args: 
