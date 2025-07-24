/*--------------------- 4.1.1 Extended Parameter Handling – Default parameter values ---------------------*/

/* 
The ECMAScript 2015 standard (otherwise known as ECMAScript 6 or ES6) introduced several improvements for handling function parameters.

One of them is the default parameter values.

Take a look at the following piece of code:
*/

function greetings(name) {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, undefined!
greetings('Alice'); // -> Hi. Alice!

/*
Calling the greetings function without an argument results in greeting someone with their name undefined.

This is because we did not provide an argument when calling the function, so the name parameter is undefined.

Of course, we should have anticipated such an eventuality and checked in the function code to see if it had been called correctly.

However, instead of playing about with conditional statements, we can do it in a much simpler way by assigning a default value to the parameter when defining the function.
*/

function greetings(name = 'anonymous') {
    console.log(`Hi, ${name}!`)
}
greetings(); // -> Hi, anonymous!
greetings('Alice'); // -> Hi. Alice!

/*
The change is made in the function definition, and the name parameter is set to 'anonymous'.

As you can see, if we forget to provide an argument for the function call, the name parameter is no longer set to an undefined value, 
but instead it is set to the default value 'anonymous'. When we call the function with a specific argument, its value then overwrites the default parameter.

If we define a function with more parameters, then we are free to choose which of them should be assigned default values. Analyze the following example carefully:
*/

function test(a, b = 1, c, d = 2) {
    console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);
}
test(); // -> a: undefined, b: 1, c: undefined, d: 2
test(100); // -> a: 100, b: 1, c: undefined, d: 2
test(100, 200); // -> a: 100, b: 200, c: undefined, d: 2
test(100, 200, 300); // -> a: 100, b: 200, c: 300, d: 2
test(100, 200, 300, 400); // -> a: 100, b: 200, c: 300, d: 400
