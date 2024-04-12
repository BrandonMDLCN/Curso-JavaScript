//------------------- 3.0.5 Unary increment and decrement operators -------------------//
/*
we also have at our disposal the unary increment ++ and decrement -- operators, in both prefix and postfix versions.
They allow us to increase (increment) or decrease (decrement) the value of the operand by 1

These operators in the postfix version (i.e. the operator is on the right side of the operand) 
performs the operation by changing the value of the variable, but returns the value before the change.

The prefix version of the operator (i.e. the operator is placed before the operand) 
performs the operation and returns the new value.
*/
let n1 = 10;
let n2 = 10;

console.log(n1); // -> 10
console.log(n1++); // -> 10
console.log(n1); // -> 11

console.log(n2); // -> 10
console.log(++n2); // -> 11
console.log(n2); // -> 11

let n3 = 20;
let n4 = 20;

console.log(n3); // -> 20
console.log(n3--); // -> 20
console.log(n3); // -> 19

console.log(n4); // -> 20
console.log(--n4); // -> 19
console.log(n4); // -> 19


//This happens because the code line:
console.log(n1++);

//is interpreted as:
console.log(n1);
n1 = n1 + 1;

//while the line:
console.log(++n1);

//means the same as:
n1 = n1 + 1;
console.log(n1);

//Keep in mind that the Number type is a floating-point type, which means that the results of some of the operations may be imprecise.
console.log(0.2 + 0.1);     // 0.30000000000000004
console.log(0.2 * 0.1);     // 0.020000000000000004
console.log(0.3 / 0.1);     // 2.9999999999999996


//------------------- 3.0.6 Compound Assignment Operators -------------------//
let x = 10;
 
x += 2;
console.log(x); // -> 12
x -= 4;
console.log(x); // -> 8
x *= 3;
console.log(x); // -> 24
x /= 6;
console.log(x); // -> 4
x **= 3;
console.log(x); // -> 64
x %= 10;
console.log(x); // -> 4
