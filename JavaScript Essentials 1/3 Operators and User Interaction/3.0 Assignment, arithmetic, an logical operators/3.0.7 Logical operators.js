//------------------- 3.0.7 Logical operators -------------------//
/*
Logical operators work with Boolean type values (true or false).
JavaScript provides us with three such operators:

a conjunction, i.e. logical AND (&& symbol)
an alternative, i.e. logical OR (symbol ||)
a negation, i.e. logical NOT (symbol !)
*/
console.log(true && true); // -> true
console.log(true && false); // -> false
console.log(false && true); // -> false
console.log(false && false); // -> false

/////////////////////////////////////////////////////////////
console.log(true || true); // -> true
console.log(true || false); // -> true
console.log(false || true); // -> true
console.log(false || false); // -> false

/////////////////////////////////////////////////////////////
console.log(!true); // -> false
console.log(!false); // -> true


// The highest priority is negation !, then conjunction &&, and finally the alternative ||. 
// The precedence can of course be changed by means of parentheses.
const a = false;
const b = true;
const c = false;
const d = true;
 
console.log(a && b && c || d); // -> true
console.log(a && b && (c || d)); // -> false
