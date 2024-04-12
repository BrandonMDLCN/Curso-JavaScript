/*
3.0.3 Arithmetic operators

All arithmetic operators, except addition, will try to implicitly convert values to the Number type before performing the operation.
The addition operator will convert everything to a String if any of the operands is a String type,
otherwise it will convert them to a Number like the rest of the arithmetic operators.

The basic binary arithmetic operators are the addition +, subtraction -, multiplication *, division /, 
division remainder % and power **. Their operation is analogous to what we know from mathematics, 
and the easiest way to trace them is to use an example:
*/
const x = 5;
const y = 2;
 
console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25
