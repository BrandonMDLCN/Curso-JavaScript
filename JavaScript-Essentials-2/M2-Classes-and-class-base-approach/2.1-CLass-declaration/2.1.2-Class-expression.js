/*--------------------- 2.1.2 Class expression ---------------------*/
/* 
Classes, like functions, are treated in JavaScript as first-class citizens.

This is a concept from the theory of programming languages, which states that a certain entity can be treated on an equal footing with other entities, such as simple data types.

What is important in this tricky definition is that such an entity can be passed as an argument, returned by a function and stored in a variable.

We discovered this feature when discussing functions.

Let's take a look at a few function declarations.

Look at the code below:
*/

function namedFunction() { 
    console.log("I'm named, I hope ... ") 
};
let anonymousFunction = function() {
    console.log("I'm a bit anonymous ...")
};
let notExactlyAnonymousFunction = function anotherNamedFunction() {
    console.log("I'm confused ...")
};
namedFunction();    // -> I'm named, I hope ...
anonymousFunction();    // -> I'm a bit anonymous ...
notExactlyAnonymousFunction();    // -> I'm confused ...

/*
The namedFunction has been declared with a name, that is, it is a named function.

We call it using this name. As you can guess, anonymousFunction is an anonymous function.

You can see that there is nothing between the function keyword and the parenthesis, and the space for the function name has not been filled.

The anonymousFunction variable holds this function, or more precisely, a reference to it.

We call the function using this variable.

The last example is a declaration of a named function, which we assign to the variable notExactlyAnonymousFunction (we will refer to the function using this variable).

The ability to store a function in a variable (i.e. a function expression) indicates that functions in JavaScript are first-class citizens.

The same is true for classes. We can declare a named class, as we have done in the previous examples, but we can also store unnamed ones in a variable.

By analogy, we will call it a class expression. Remember our example from the AlmostEmptyClass class?

Let’s declare it now using a class expression – look at the code below:
*/

let AlmostEmptyClass = class {
    constructor(sth) {
        console.log(sth);
    };
    sayHi() {
        console.log("Hi!")
    };
};
let almostEmptyObject = new AlmostEmptyClass(120); // 120
almostEmptyObject.sayHi(); // -> Hi!

/*
Remember that despite being substituted for a variable, it is still a class, not an object.

As you can see, the difference affects only the first line of our examples:
*/

//  class AlmostEmptyClass {


//  let AlmostEmptyClass = cla/ss {
