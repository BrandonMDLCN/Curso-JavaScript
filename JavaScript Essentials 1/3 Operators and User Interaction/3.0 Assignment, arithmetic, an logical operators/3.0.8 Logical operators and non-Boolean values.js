//------------------- 3.0.8 Logical operators and non-Boolean values -------------------//
/*
As long as operands are of the type Boolean, we can easily see what will be returned. 
But those operators can also be used with different data types.
The easiest case is logical NOT. First, the operand is temporarily converted to a Boolean value
and only then it is treated with the appropriate operator action (i.e. a true value is converted to false, and vice versa).

Therefore, the NOT operator will always return either false or true. Often, 
double negation is used to convert any type to Boolean.
*/
let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";
 
console.log(!nr); // -> true
console.log(!year); // -> false
console.log(!name); // -> false
console.log(!empty); // -> true
 
console.log(!!nr); // -> false  //Lo convierte en su valor Boleano
console.log(!!name); // -> true //Lo convierte en su valor Boleano

///////////////////////////////////////////////////////////////////////
/*
la comparación entre 2 variables
Cuando se utiliza && se devuelve el ultimo elemento de la cadena de comparación

Mientras que el el || se regresa el primer elemento de las comparaciones
siempre y cuando no haya un Falso, sino regresa el que sigue. 
*/

console.log(true && 1991); // -> 1991
console.log(false && 1991); // -> false
console.log(2 && 5); // -> 5
console.log(0 && 5); // -> 0
console.log("Alice" && "Bob"); // -> Bob
console.log("" && "Bob"); // -> empty string
 
 
console.log(true || 1991); // -> true
console.log(false || 1991); // -> 1991
console.log(2 || 5); // -> 2
console.log(0 || 5); // -> 5
console.log("Alice" || "Bob"); // -> Alice
console.log("" || "Bob"); // -> Bob

/*
if the first operand of AND is false, it will be returned, and no other check will be performed.
if the first operand of OR is true, it will be returned, and no other check will be made.
*/
let x = 0;
let y = 0;
console.log(x++ && y++); // -> 0
console.log(x); // -> 1
console.log(y); // -> y == 0


//------------------- 3.0.9 Compound Assignment Operators -------------------//
/*
binary logical operators can be used in combination with the assignment operator, 
creating a logical AND assignment &&= and a logical OR assignment ||=.
*/
let a = true;
console.log(a); // -> true
a &&= false;
console.log(a); // -> false

/*
The instruction a &&= false means exactly the same as a = a && false.

We can prepare a similar example for OR operations:
*/
let b = false;
console.log(b); // -> false
b ||= true;
console.log(b); // -> true

//This time, the operation b ||= true is interpreted as b = b || true.