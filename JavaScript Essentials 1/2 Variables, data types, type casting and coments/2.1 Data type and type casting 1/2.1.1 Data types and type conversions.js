/*
JavaScript language is weakly typed
so among other things it allows you to change the type of data stored in one variable.

In JavaScript, data types are divided into primitive (or simple) and complex (or composite).

Among the primitive types, we can find numbers and strings of characters, 
while the complex types include, for example, arrays and objects.
Data of complex types, such as an array, will consist of many elements of primitive (not complex) types.

Literals are a way of noting specific values (data) in the program code.
Literals are found in virtually all programming languages, including JavaScript.

Let's take a look at an example:
*/
let  year  =  1990;
console.log(year);  //  ->  1990
console.log(1991);  //  ->  1991
console.log("Alice");  //  ->  Alice

/*
In this example, we declare the variable year and immediately initiate it with the value 1990. 
The digits 1990, written in the code at the place of variable initialization, are a literal that represents a number.

The value 1990 is displayed on the console using the year variable.
Then we display on the console the value 1991 and "Alice", in both cases using "literals" (representing a number and a string respectively).


/*--------------------------------------------*/
/*      2.1.2 The typeof operator       */
/*--------------------------------------------*/

/*
The typeof operator is used to determine the type of a variable.
It is used to determine the type of a variable.

The typeof operator just mentioned is unary (it takes only one argument) and informs us of the type of data indicated as a given argument.
The argument can be either a literal or a variable

Let's take a look at an example:
*/
let  yea  =  1990;
console.log(typeof yea);  //  ->  "number"

/*
In this example, we declare the variable year and immediately initiate it with the value 1990. 
The digits 1990, written in the code at the place of variable initialization, are a literal that represents a number.
We then use the typeof operator to check if the variable year is of the number data type.

If you run this script, the output will be:
->  "number". This means that the   variable year  is indeed of the number data type.</s>

The typeof operator returns a string with one of the fixed values assigned to each of the types.
All possible return values of the typeof operator are:
"undefined"
"object"
"boolean"
"number"
"bigint"
"string"
"symbol"
"function"

This list roughly shows us what types of data we will be dealing with in JavaScript.
*/

let  año  =  1990;
console.log(typeof  año);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  año;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string
