/*--------------------- 1.1.1 Primitive data types ---------------------*/
/*
In the previous part of the course, you got to know some primitive data types.

In practice, only number, boolean and string types are actually used. Whether a type is a certain value can be checked with the typeof command.

With this command, we can also test not just a particular value, but a variable (or more precisely, what is placed inside it).

Try to execute the following commands in the console and observe the results. Furthermore, it would be good to try to test every piece of sample code that we discuss.
*/

console.log(typeof 2.5); // -> number
console.log(typeof "one two three"); // -> string
console.log(typeof false); // -> boolean

//Values can be placed in variables - we can store them there or perform actions on them (e.g., divide numbers or merge strings).
//let nr = 2.5; 
nr = nr / 2;
console.log(typeof nr); // -> number

/*
If we have not explicitly assigned any value to a declared variable, it contains an undefined value by default. 
The undefined value is also treated as one of the primitive types of data, equal to the string or number type.
*/
let nr = 2.5; 
nr = nr / 2;
console.log(typeof nr); // -> number

/*
Note that typeof returns the name of the data type as a string.

What do we actually mean by these types being primitive? Their "primitiveness" is that they are not complex. 
There is always one specific, simple value in a variable. A variable contains either a number, or a logical value, or a character string. 
Alternatively, there may be nothing there, which means that the undefined value is actually there. Primitive, isn't it?

Using only these types of data would greatly reduce the possibility of creating more advanced programs. 
Therefore, in addition to the primitive types, complex types are used. To simplify things a little, we can assume that we will be dealing with 
two such types – arrays and objects.

How is this a simplification? Well, arrays in JavaScript are also objects. In JavaScript, even functions are objects. 
In fact, everything in JavaScript, except a primitive, is an object. But for now, let’s pretend that we don't know this, 
and treat as objects only openly declared ... objects.
*/